import React from "react";
import { IoAdd, IoArrowForwardOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { faqsData } from "@/app/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="bg-white p-4 md:p-8 grid md:grid-cols-12 gap-y-8 rounded-2xl mt-10 text-gray-700">
      <div className="col-span-12 lg:col-span-5">
        <h4 className="font-semibold text-2xl md:text-4xl text-gray-800 md:leading-12">
          Frequently <br /> Asked Questions
        </h4>
        <p className="md:w-75 text-gray-900 mt-3">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <button className="border border-gray-100 rounded-md py-2 px-3 mt-7">
          See All FAQ’s
        </button>
      </div>
      <div className="col-span-12 lg:col-span-7 ">
        <Accordion type="single" className="space-y-4 pb-5">
          {faqsData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-200 p-5 rounded-md"
            >
              <AccordionTrigger
                className="text-md hover:no-underline"
                rightIcon={
                  <span className="pointer-events-none shrink-0 translate-y-0.5 rounded-md bg-amber-100 leading-none flex items-center justify-center w-9 h-9">
                    <IoAdd
                      className="group-data-[state=open]:hidden"
                      size={20}
                    />
                    <TfiClose
                      className="hidden group-data-[state=open]:block"
                      size={13}
                    />
                  </span>
                }
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 border-t border-gray-200 pt-5 pb-5">
                {faq.answer}
              </AccordionContent>
              <AccordionContent className="w-full flex justify-between items-center gap-3 bg-neutral-100 py-4 px-5 rounded-lg  ">
                {faq.cta}
                <span className="flex justify-center items-center p-3 bg-white rounded-full">
                  <IoArrowForwardOutline size={18} />
                </span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
