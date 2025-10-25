import React from "react";

const TopHeader = ({ title, description }) => {
  return (
    <section className="flex flex-col gap-3 my-10">
      <h1 className="flex-1 text-gray-800 font-semibold text-3xl">
        {title}
      </h1>
      <p className="flex-1 text-gray-600 text-md">
        {description}
      </p>
    </section>
  );
};

export default TopHeader;
