"use client";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TopSection from "./TopSection";
import { pricingData } from "../lib/data";
import Link from "next/link";

const Pricing = () => {
  const [activeButton, setActiveButton] = useState("Monthly");

  return (
    <>
      <TopSection
        title="Our Pricing"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        buttonGroup={true}
        buttonGroup1="Monthly"
        buttonGroup2="Yearly"
        onButtonClick={setActiveButton}
        activeButton={activeButton}
      />

      <section className="bg-white md:p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl">
        {pricingData.map((plan, planIndex) => (
          <div
            key={plan.id}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-4 "
          >
            <h3
              id={plan.id}
              className="text-gray-800 bg-gray-100 border border-amber-500 p-2 text-center rounded-md text-sm mt-4 "
            >
              {plan.name}
            </h3>
            <p className="flex items-baseline justify-center gap-x-2 mt-5 ">
              <span className="text-gray-900 text-6xl font-semibold tracking-tight">
                {activeButton === "Monthly"
                  ? plan.priceMonthly
                  : plan.priceYearly}
              </span>
              <span className="text-gray-500 text-sm font-medium tracking-tight">
                /{activeButton.toLowerCase()}
              </span>
            </p>

            <div className="bg-white p-4 md:p-8 mt-5 rounded-2xl">
              <ul role="list" className="text-gray-900 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-3 border border-gray-100 py-2 px-3 rounded-md text-sm"
                  >
                    <div
                      className={`p-1 ${
                        planIndex === 0 && (idx === 4 || idx === 5)
                          ? "bg-white border border-gray-200"
                          : "bg-amber-100"
                      } rounded-md flex items-center justify-center`}
                    >
                      {planIndex === 0 && (idx === 4 || idx === 5) ? (
                        <RxCross2
                          aria-hidden="true"
                          className="text-gray-800 text-xs"
                        />
                      ) : (
                        <IoCheckmark
                          aria-hidden="true"
                          className="text-gray-800 text-xs"
                        />
                      )}
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                aria-describedby={plan.id}
                className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600"
              >
                Get started today
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pricing;
