import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GoStarFill } from "react-icons/go";

const TopNavBar = () => {
  return (
    <div className="bg-[#FF9500] text-white text-sm p-2">
      <span className="flex items-center justify-center">
        Free Courses
        <sup className="mx-1">
          <GoStarFill color="#FFD700" />
        </sup>
        Sale Ends Soon, Get It Now <GoArrowRight className="ml-2" />
      </span>
    </div>
  );
};

export default TopNavBar;
