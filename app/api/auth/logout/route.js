import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // Delete via request cookie store (App Router API)
  try {
    cookies().delete("token");
  } catch {}

  const response = NextResponse.json(
    { success: true },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );

  // ✅ remove token cookie
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    priority: "high",
    path: "/",
    maxAge: 0, // delete immediately
    expires: new Date(0),
  });

  // ✅ remove user cookie
  response.cookies.set("user", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    priority: "high",
    path: "/",
    maxAge: 0, // delete immediately
    expires: new Date(0),
  });

  return response;
}
