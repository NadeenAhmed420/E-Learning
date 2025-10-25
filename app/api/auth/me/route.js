import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const userCookie = cookieStore.get("user")?.value;

    console.log("🔍 Checking for token:", !!token);
    console.log("🔍 Checking for user cookie:", !!userCookie);

    if (!token) {
      console.log("❌ No token found in cookies");
      return NextResponse.json(
        { error: "No token found" },
        { status: 401 }
      );
    }

    // Parse user info from cookie
    let user = null;
    if (userCookie) {
      try {
        user = JSON.parse(userCookie);
        console.log("✅ User info found in cookie:", user);
      } catch (parseError) {
        console.log("❌ Error parsing user cookie:", parseError);
      }
    }

    // If no user info in cookie, return basic info
    if (!user) {
      user = {
        email: "user@example.com",
        name: "User",
        authenticated: true
      };
    }
    
    return NextResponse.json({ user });
  } catch (error) {
    console.error("❌ Auth verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}