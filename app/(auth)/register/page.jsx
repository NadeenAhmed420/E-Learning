"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { registerSchema } from "@/app/lib/schemas/authSchemas";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Autoplay from "embla-carousel-autoplay";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { testimonialsData } from "@/app/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";

export default function RegisterPage() {
  const formStyle =
    "w-full flex flex-col justify-center items-start bg-white opacity-95 border border-amber-500 p-4 md:p-8 rounded-xl shadow-sm";
  const router = useRouter();
  const { register, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    dateOfBirth: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfBirth: format(date, "yyyy-MM-dd") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📌 Raw form data before validation:", formData);

    try {
      const validated = registerSchema.parse(formData);
      console.log("✅ Validated data:", validated);

      await register(
        validated.name,
        validated.email,
        validated.password,
        validated.rePassword,
        validated.dateOfBirth,
        validated.gender
      );

      console.log("🎉 User successfully registered!");
      router.push("/login");
    } catch (err) {
      if (err.errors) {
        const newErrors = {};
        err.errors.forEach((e) => {
          newErrors[e.path[0]] = e.message;
        });
        setErrors(newErrors);
        console.log("❌ Validation errors:", newErrors);
      } else {
        console.error("❌ Server/Context error:", err);
      }
    }
  };
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-14 px-5 py-10 md:py-10">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-4xl font-semibold mb-4">Students Testimonials</h1>
          <p className="text-xl ">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Carousel
          className="w-full mt-10"
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
        <h1 className="text-4xl mx-auto font-semibold mb-4 text-amber-500 ">
          Register
        </h1>
        <label className="text-sm text-black" htmlFor="name">
          Name
        </label>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <label className="text-md text-black mt-5" htmlFor="email">
          Email
        </label>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <label className="text-md text-black mt-5" htmlFor="password">
          Password
        </label>
        <div className="relative w-full">
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <IoEyeSharp className="h-5 w-5" />
            ) : (
              <IoEyeOff className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        <label className="text-md text-black mt-5" htmlFor="rePassword">
          Confirm Password
        </label>
        <div className="relative w-full">
          <Input
            name="rePassword"
            type={showRePassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.rePassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowRePassword(!showRePassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showRePassword ? (
              <IoEyeSharp className="h-5 w-5" />
            ) : (
              <IoEyeOff className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.rePassword && (
          <p className="text-red-500">{errors.rePassword}</p>
        )}

        <label className="text-md text-black mt-5" htmlFor="dateOfBirth">
          Date Of Birth
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!formData.dateOfBirth}
              className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal  shadow-sm text-black"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.dateOfBirth ? (
                format(new Date(formData.dateOfBirth), "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={
                formData.dateOfBirth
                  ? new Date(formData.dateOfBirth)
                  : undefined
              }
              onSelect={(date) => {
                if (date) {
                  setFormData({
                    ...formData,
                    dateOfBirth: format(date, "yyyy-MM-dd"),
                  });
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth}</p>
        )}

        <label className="text-md text-black mt-5" htmlFor="gender">
          Gender
        </label>
        <Select
          name="gender"
          value={formData.gender}
          onValueChange={(value) =>
            handleChange({ target: { name: "gender", value } })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}

        <div className="flex ms-auto gap-2 text-sm text-black mt-3">
          <p className="text-sm text-gray-500">Already have an account?</p>
          <Link href="/login" className="text-amber-600 hover:underline">
            Login here
          </Link>
        </div>

        <Button
          type="submit"
          size="sm"
          disabled={loading}
          className="w-full bg-amber-600/90 text-white px-4  hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-5"
        >
          {loading ? (
            <>
              <Loader2Icon className="mr-1 h-4 w-4 animate-spin" />
              Creating your account...
            </>
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </section>
  );
}
