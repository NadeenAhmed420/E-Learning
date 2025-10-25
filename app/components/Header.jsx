import { TiFlash } from "react-icons/ti";
import { Button } from "@headlessui/react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center justify-center gap-4 text-gray-700 mt-20 mb-10">
        <h1 className="relative text-xl md:text-3xl font-semibold">
          <img
            src="/header-vector.svg"
            alt=""
            className="absolute bottom-12 left-[-15px] md:left-[-25px] w-5 h-5 "
          />
          <span className="inline-flex items-center justify-center rounded-md bg-[#FFF4E5] p-2 mr-3">
            <TiFlash className="text-amber-500 size-5" />
          </span>
          <span className="text-amber-500">Unlock</span> Your Creative Potential
        </h1>
        <p className="text-center text-md md:text-xl font-medium">
          with Online Design and Development Courses.
        </p>
        <span className="text-md">
          Learn from Industry Experts and Enhance Your Skills.
        </span>

        <div className="flex gap-4 border-t border-gray-200 mt-2 py-7">
          <Button className="rounded px-4 py-2 text-sm text-white bg-amber-500 data-hover:bg-amber-600">
            <a href="/dashboard/courses">Explore Courses</a>
          </Button>
          <Button className="rounded px-5 py-2 text-sm text-gray-900 bg-gray-100 data-hover:bg-gray-200">
            <a href="/dashboard/pricing">View Pricing</a>
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 p-5 bg-gray-100">
        <img src="/swiper-7.svg" alt="Logo 6" />{" "}
        <img src="/swiper-1.svg" alt="Logo 1" />
        <img src="/swiper-2.svg" alt="Logo 2" />
        <img src="/swiper-3.svg" alt="Logo 3" />
        <img src="/swiper-4.svg" alt="Logo 4" />
        <img src="/swiper-5.svg" alt="Logo 5" />
        <img src="/swiper-6.svg" alt="Logo 6" />
      </div>
      <div className="relative w-full h-[400px] mt-10 mb-0">
        <Image
          className="object-cover"
          src="/header-bg.png"
          alt="Header Background"
          priority
          fill
        />
      </div>
    </header>
  );
};

export default Header;
