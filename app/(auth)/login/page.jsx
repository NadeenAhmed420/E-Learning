"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { loginSchema } from "@/app/lib/schemas/authSchemas";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsData } from "@/app/lib/data";

export default function LoginPage() {
  const formStyle =
    "w-full h-[500px] flex flex-col justify-center items-start bg-white opacity-95 border border-gray-300 p-4 md:p-8 rounded-xl ";
  const { login, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    console.log("handleSubmit called with:", { email, password });

    const parsed = loginSchema.safeParse({ email, password });
    console.log("Zod parse result:", parsed);
    if (!parsed.success) {
      const fieldErrors = {};
      parsed.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      console.log("Validation errors:", fieldErrors);
      setErrors(fieldErrors);
      return;
    }

    try {
      console.log("Attempting login with:", { email, password });
      await login(email, password);
      console.log("Login successful, redirecting...");
      router.push("/dashboard");
    } catch (err) {
      console.error("Login error:", { message: err.message, cause: err.cause });
      const serverError = err.cause || {
        field: "general",
        message: err.message || "Incorrect email or password",
      };
      setErrors({ [serverError.field]: serverError.message });
    }
  };
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }) 
  );
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-14 px-5 py-10 ">
      <div className="hidden md:block">
        <div>
          <h1 className="text-4xl font-semibold mb-4">Students Testimonials</h1>
          <p className="text-xl">
            Hear from our learners! Real stories, real progress—discover how our platform is helping students around the globe master new skills and advance their careers.
          </p>
        </div>
        <Carousel
          className="w-full  mt-10"
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent>
            {testimonialsData.map(({ id, img, author, description }) => (
              <CarouselItem key={id}>
                <div className="p-1  ">
                  <Card className="bg-white opacity-95">
                    <CardContent className="py-6">
                      <p className="text-sm text-gray-600 mb-8">
                        {description}
                      </p>
                      <hr className="border-b border-gray-100" />
                      <div className="flex justify-between items-center px-5 md:px-8 ">
                        <div className="flex items-center mt-5">
                          <img
                            className="w-9 h-9"
                            src={img}
                            alt={`profile ${id}`}
                          />
                          <small className="text-xs font-medium text-gray-900 py-1 px-3">
                            {author}
                          </small>
                        </div>
                        <button className="text-xs p-2 rounded border text-gray-800 border-gray-300 bg-neutral-50 hover:bg-neutral-200 transition duration-300 ease-in mt-5">
                          Read Full Story
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <form onSubmit={handleSubmit} className={formStyle}>
        <h1 className="text-4xl font-semibold text-center text-amber-500 mx-auto mb-10">
          Login Page
        </h1>
        {errors.general && (
          <div className="text-red-500 mb-4 text-sm">{errors.general}</div>
        )}

        <label className="text-md text-black" htmlFor="email">
          Email
        </label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        )}

        <label className="text-md text-black mt-10" htmlFor="password">
          Password
        </label>
        <div className="relative w-full">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-[26px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <IoEyeSharp className="h-5 w-5" />
            ) : (
              <IoEyeOff className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        )}

        <Button
          type="submit"
          size="sm"
          disabled={loading}
          className="w-full bg-amber-600/90 text-white px-4  hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
        >
          {loading ? (
            <>
              <Loader2Icon className="mr-1 h-4 w-4 animate-spin" />
              Please wait...
            </>
          ) : (
            "Login"
          )}
        </Button>

        <div className="flex ms-auto gap-2 text-sm mt-5">
          <p className="text-sm text-gray-500"> Don't have an account?</p>{" "}
          <Link href="/register" className="text-amber-600 hover:underline">
            Register here
          </Link>
        </div>
      </form>
    </section>
  );
}
