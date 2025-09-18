import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="bg-white gap-10 pt-10 pb-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 sm:px-15">
        <div>
          <img src="/Logo.svg" className="w-9 h-9" alt="logo" />
          <div className="mt-8 space-y-3">
            <p className="flex gap-2 items-center text-gray-500 text-sm">
              <IoMdMail size={18} color="black" /> hello@skillbridge.com
            </p>
            <p className="flex gap-2 items-center text-gray-500 text-sm">
              <IoCallSharp size={18} color="black" /> +91 91813 23 2309
            </p>
            <p className="flex gap-2 items-center text-gray-500 text-sm">
              <IoLocationSharp size={18} color="black" /> Somewhere in the World
            </p>
          </div>
        </div>
        <div>
          <ul className="space-y-3 text-sm">
            <li className="font-semibold text-gray-800">Home</li>
            <li className="text-gray-500">Benefits</li>
            <li className="text-gray-500">Our Courses</li>
            <li className="text-gray-500">Our Testimonials</li>
            <li className="text-gray-500">Our FAQ</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-sm">
            <li className="font-semibold text-gray-800">About Us</li>
            <li className="text-gray-500">Company</li>
            <li className="text-gray-500">Achievements</li>
            <li className="text-gray-500">Our Goals</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Social Profiles</p>
          <div className="flex gap-3 mt-5 text-gray-700">
            <a href="/Facebook.com" className="p-2 rounded-lg bg-gray-100 ">
              <SlSocialFacebook size={18} />
            </a>
            <a href="/Linkedin.com" className="p-2 rounded-lg bg-gray-100">
              <FaXTwitter size={18} />
            </a>
            <a href="/Twitter.com" className="p-2 rounded-lg bg-gray-100">
              <BiLogoLinkedin size={18} />
            </a>
            <a href="/Instagram.com" className="p-2 rounded-lg bg-gray-100">
              <RxInstagramLogo size={18} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-gray-600 font-medium flex justify-center items-center mt-10">
        © 2025 Nadeen Ahmed. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
