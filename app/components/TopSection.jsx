"use client";
import React from "react";
import Link from "next/link";

const TopSection = ({
  title,
  description,
  button,
  buttonGroup = false,
  buttonGroup1,
  buttonGroup2,
  activeButton,
  onButtonClick,
  href,
}) => {
  return (
    <section className="my-8 md:my-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="order-2 md:order-1 flex-1">
          <h3 className="text-2xl md:text-4xl text-gray-800 font-semibold mb-2">
            {title}
          </h3>
          <p className="text-md xl:w-4xl text-gray-500">{description}</p>
        </div>

        {buttonGroup ? (
          <div className="relative w-40 order-1 md:order-2 text-amber-500 rounded-md bg-white opacity-80 px-3 py-2 mb-3 md:mb-0 ml-auto flex items-center justify-center ">
            <button
              onClick={() => onButtonClick("Monthly")}
              className={`text-sm px-3 py-1 rounded-sm ${
                activeButton === "Monthly"
                  ? "bg-amber-500 text-white"
                  : "hover:text-amber-600"
              }`}
            >
              {buttonGroup1}
            </button>
            <button
              onClick={() => onButtonClick("Yearly")}
              className={`text-sm px-3 py-1 rounded-sm ml-2 ${
                activeButton === "Yearly"
                  ? "bg-amber-500 text-white"
                  : "hover:text-amber-600"
              }`}
            >
              {buttonGroup2}
            </button>
          </div>
        ) : button && href ? (
          <Link
            href={href}
            className="w-25 order-1 md:order-2 text-sm text-amber-500 hover:text-amber-600 rounded-md bg-white opacity-80 px-5 py-2 mb-3 md:mb-0 ml-auto"
          >
            <button>{button}</button>
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default TopSection;
