// app/context/AuthContext.js
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  loginUser as apiLoginUser,
  registerUser as apiRegisterUser,
  logoutUser as apiLogoutUser,
} from "@/app/lib/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start with true to check auth status
  const router = useRouter();

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include",
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setUser(data.user);
          }
        }
      } catch (error) {
        console.log("No existing session found");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();
      if (res.ok && data?.user) {
        setUser(data.user);
        router.push("/dashboard"); // redirect after login
      } else {
        throw new Error(data.error || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    name,
    email,
    password,
    rePassword,
    dateOfBirth,
    gender
  ) => {
    setLoading(true);
    try {
      const res = await apiRegisterUser(
        name,
        email,
        password,
        rePassword,
        dateOfBirth,
        gender
      );
      if (res?.user) setUser(res.user);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      setUser(null);
      router.replace("/login");
      router.refresh();
      if (typeof window !== "undefined") {
        setTimeout(() => {
          if (window.location.pathname !== "/login") {
            window.location.assign("/login");
          }
        }, 50);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
