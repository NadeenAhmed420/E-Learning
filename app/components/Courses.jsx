import React from "react";
import TopSection from "./TopSection";
import { coursesData } from "../lib/data";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const cardStyle =
    "bg-white p-5 md:p-8 rounded-lg shadow-sm transform -translate-x-2.5 translate-y-2.5 transition-all duration-300 ease hover:translate-y-0  hover:translate-x-0   ";
  return (
    <>
      <TopSection
        title="Our Courses"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        button="View All"
        href="/dashboard/courses"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map(
          ({ id, imgHeader, title, description, author, level, duration }) => (
            <a href={`/courses/${id}`} key={id} className={cardStyle}>
              <img src={imgHeader} alt={title} />
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-3">
                  <small className="text-xs text-gray-800 border border-gray-200 py-1 px-3">
                    {duration}
                  </small>
                  <small className="text-xs text-gray-800 border border-gray-200 py-1 px-3">
                    {level}
                  </small>
                </div>
                <span className="text-xs font-medium">{author}</span>
              </div>
              <h4 className="text-gray-800 font-semibold text-sm mb-2 mt-4">
                {title}
              </h4>
              <p className="max-w-80 text-xs text-gray-500">{description}</p>

              <Button
                asChild
                className="w-full flex items-center justify-center gap-2 p-2 text-xs rounded text-gray-800 border border-[#ff9500] bg-neutral-50 hover:bg-gray-200 transition duration-300 ease-in mt-5"
              >
                <Link href="/dashboard/pricing">
                  Get it Now <MdArrowForward color="#FF9500" size={18} />{" "}
                </Link>
              </Button>
            </a>
          )
        )}
      </section>
    </>
  );
};

export default Courses;
