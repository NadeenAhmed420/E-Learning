import { NextResponse } from "next/server";
import { registerSchema } from "@/app/lib/schemas/authSchemas";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📩 Register request body:", body);

    // Validate with Zod schema
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    // Proxy to backend signup endpoint
    const res = await fetch(`${process.env.BACKEND_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { error: data.error || data.message || "Registration failed" },
        { status: res.status }
      );
    }

    // Check and log token if present
    const token = data.token || data.access_token;
    if (token) {
      console.log("🔑 Register token:", token);
    } else {
      console.log("ℹ️ No token returned from register");
    }

    const response = NextResponse.json({
      success: true,
      user: data.user || {
        name: parsed.data.name,
        email: parsed.data.email,
      },
    });

    if (token) {
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        priority: "high",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    console.log("🎉 Registration successful:", data);
    return response;
  } catch (err) {
    console.error("❌ Register error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
