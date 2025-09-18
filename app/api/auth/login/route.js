import { NextResponse } from "next/server";
import { loginSchema } from "@/app/lib/schemas/authSchemas";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Login request body:", body);

    // Validate with Zod schema
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    // Proxy to backend signin endpoint
    const res = await fetch(`${process.env.BACKEND_URL}/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { error: data.error || data.message || "Login failed" },
        { status: res.status }
      );
    }

    const token = data.token || data.access_token;
    if (!token) {
      return NextResponse.json(
        { error: "Token not found in response" },
        { status: 500 }
      );
    }

    // Log the token
    console.log("🔑 Login token:", token);

    const response = NextResponse.json({
      success: true,
      user: data.user || { email: parsed.data.email },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      priority: "high",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    console.log("🎉 Login successful:", data);
    return response;
  } catch (err) {
    console.error("❌ Login error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
