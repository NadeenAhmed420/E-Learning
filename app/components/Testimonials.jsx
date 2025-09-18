import React from "react";
import TopSection from "./TopSection";
import { MdOutlineArrowOutward } from "react-icons/md";
import { testimonialsData } from "../lib/data";

const Testimonials = () => {
  const cardStyle =
    "bg-white rounded-lg p-5 md:p-8 shadow-sm transform translate-y-2.5 transition-all duration-300 ease hover:translate-y-0 ";
  return (
    <>
      <TopSection
        title="Our Testimonials"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        button="View All"
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonialsData.map(({ id, img, author, description }) => (
          <div key={id} className={cardStyle}>
            <p className="text-sm text-gray-600 mb-8">{description}</p>
            <hr className="border-b border-gray-100" />
            <div className="flex justify-between items-center px-5 md:px-8 ">
              <div className="flex items-center mt-5">
                <img className="w-9 h-9" src={img} alt={`profile ${id}`} />
                <small className="text-xs font-medium text-gray-900 py-1 px-3">
                  {author}
                </small>
              </div>
              <button className="text-xs p-2 rounded border text-gray-800 border-gray-300 bg-neutral-50 hover:bg-neutral-200 transition duration-300 ease-in mt-5">
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Testimonials;
