"use client";

import TopHeader from "@/app/components/TopHeader";
import { coursesData } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const cardStyle =
    "w-full bg-white border border-gray-100 p-4 md:p-8 shadow-sm rounded-2xl ";

  return (
    <>
      <TopHeader
        title="Online Courses on Design and Development"
        description="Welcome to our online course page. Search and explore the courses below."
      />

      <div className="relative md:w-100 ms-auto mb-5">
        <Input
          type="text"
          placeholder="Search Courses ....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-sm bg-white text-black"
        />
        <FiSearch
          size={15}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-amber-500"
        />
      </div>
      <section className="space-y-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className={cardStyle}>
              <div className="flex flex-col-reverse md:flex-row justify-start md:justify-between ">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 my-5 md:max-w-4xl">
                    {course.description}
                  </p>
                </div>
                <Button
                  className="text-black font-semibold hover:bg-amber-500 hover:text-white hover:font-bold mb-4 "
                  variant="outline"
                >
                  <Link href={`/dashboard/courses/${course.id}`}>View Course</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {course.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={course.title}
                    className="w-full rounded-sm object-cover"
                  />
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{course.level}</Badge>
                  <Badge variant="outline">{course.duration}</Badge>
                </div>
                <span className="text-gray-800 font-medium italic underline text-sm ">
                  {course.author}
                </span>
              </div>
              <div className="border border-gray-200 rounded-lg mt-5">
                <h5 className="text-black font-semibold text-xl p-4">
                  Curriculum
                </h5>
                <hr className="border border-gray-200" />
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 text-white px-6">
                  {course.curriculum.map((module) => (
                    <div key={module.module} className="my-4">
                      <span className="text-3xl text-black font-semibold ">
                        {module.module}
                      </span>
                      <p className="text-xs text-gray-400 mt-3 ">
                        {module.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No courses found.</p>
        )}
      </section>
    </>
  );
};

export default Page;
