import { coursesData } from "@/app/lib/data";
import { notFound } from "next/navigation";
import TopHeader from "@/app/components/TopHeader";
import { IoMdTime } from "react-icons/io";

export default function CourseDetailPage({ params }) {
  const { id } = params;
  const course = coursesData.find((c) => c.id === Number(id));

  if (!course) return notFound();

  return (
    <div className="my-10">
      <TopHeader title={course.title} description={course.description} />

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {course.curriculum.map((module) => (
          <div
            key={module.module}
            className="bg-white border border-gray-200 p-6 rounded-2xl"
          >
            <span className="flex justify-end text-5xl font-bold text-black">
              {module.module}
            </span>
            <p className="text-md text-gray-700 font-bold my-5 ml-2">
              {module.title}
            </p>
            <div className="ml-2 mt-2 text-sm text-gray-600 space-y-4">
              {module.lessons.map((lesson) => (
                <div
                  key={lesson.lesson}
                  className="group flex justify-between gap-10 bg-white border border-gray-200 p-4 rounded-md hover:border-amber-500 hover:shadow-sm hover:scale-[1.01] transition-normal duration-300 ease-in-out"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-gray-700 font-semibold text-md">
                      {lesson.title}
                    </span>
                    <span className="text-gray-500">{lesson.lesson}</span>
                  </div>
                  <span className="h-[25px] flex items-center justify-center gap-1 bg-gray-100 border-md text-gray-500 px-3 rounded-sm text-xs py-0 group-hover:bg-amber-100 group-hover:font-semibold">
                    <IoMdTime size={18} /> {lesson.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
