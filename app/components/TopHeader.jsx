import React from "react";

const TopHeader = ({ title, description }) => {
  return (
    <section className="grid grid-cols-12 gap-5 my-10 md:my-20 ">
      <h1 className="col-span-12 md:col-span-6 text-gray-800 font-bold text-4xl">
        {title}
      </h1>
      <p className="col-span-12 md:col-span-6 text-gray-600 text-md">
        {description}
      </p>
    </section>
  );
};

export default TopHeader;
