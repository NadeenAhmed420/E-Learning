import React from "react";
import TopSection from "./TopSection";
import { MdOutlineArrowOutward } from "react-icons/md";
import { benefitsData } from "../lib/data";

const Benefits = () => {
  const cardStyle = "bg-white p-5 md:p-8 rounded-lg shadow-sm transform translate-y-2.5 transition-all duration-300 ease hover:translate-y-0 ";
  return (
    <>
      <TopSection
        title="Benefits"
        description="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eos
        exercitationem est at architecto tenetur voluptate dignissimos delectus,
        molestias doloribus."
        button="View All"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefitsData.map(({ id, number, title, description }) => (
          <div key={id} className={cardStyle}>
            <span className="text-5xl flex justify-end font-bold text-gray-800">
              {number}
            </span>
            <h4 className="text-gray-800 font-semibold text-sm mb-2 mt-4">
              {title}
            </h4>
            <p className="max-w-80 text-xs text-gray-500">{description}</p>
            <button className="flex items-end justify-end ms-auto p-2 rounded border border-gray-300 bg-neutral-50 hover:bg-neutral-200 transition duration-300 ease-in mt-5">
              <MdOutlineArrowOutward color="#FF9500" size={22} />
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Benefits;
