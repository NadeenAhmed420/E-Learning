import TopHeader from "@/app/components/TopHeader";
import { contactInfo } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactUs = () => {
  const sectionStyle =
    " w-full grid grid-cols-12 gap-5 lg:gap-10 bg-white opacity-95 border border-gray-100 px-4 md:px-8 rounded-md shadow-xs py-5 mb-10";
  return (
    <>
      <TopHeader
        title="Contact Us"
        description="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <section className={sectionStyle}>
        <form className="col-span-12 lg:col-span-8 space-y-5 lg:space-y-10 relative lg:pr-8 lg:border-r border-gray-200 ">
          <div className="w-full flex gap-4">
            <div className="w-full">
              <label className="text-md text-black" htmlFor="firstName">
                First Name
              </label>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-md text-black" htmlFor="lastName">
                Last Name
              </label>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="w-full flex gap-4">
            <div className="w-full">
              <label className="text-md text-black" htmlFor="email">
                Email
              </label>
              <Input type="email" id="email" placeholder="Email" required />
            </div>

            <div className="w-full">
              <label className="text-md text-black" htmlFor="phone">
                Phone
              </label>
              <Input id="phone" placeholder="Phone" required />
            </div>
          </div>

          <div className="w-full">
            <label className="text-md text-black" htmlFor="subject">
              Subject
            </label>
            <Input type="text" id="subject" placeholder="Subject" required />
          </div>

          <div className="w-full">
            <label className="text-md text-black " htmlFor="message">
              Message
            </label>
            <Textarea placeholder="Type your message here." required />
          </div>

          <Button
            type="submit"
            size="sm"
            className="w-50 mx-auto bg-amber-600/90 text-white px-4 hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-7"
          >
            Send Your Message
          </Button>
        </form>

        <Card className="col-span-12 lg:col-span-4 border-none shadow-none">
          {contactInfo.map((item) => (
            <CardContent
              key={item.text}
              className="bg-neutral-50 border border-gray-100 p-7 mb-2 rounded-xl"
            >
              <span className="flex justify-center items-center p-3 bg-neutral-200 w-fit rounded-md mx-auto mb-3">
                {item.icon}
              </span>
              <span className="text-gray-500 font-medium text-center block">
                {item.text}
              </span>
            </CardContent>
          ))}
        </Card>
      </section>
    </>
  );
};
export default ContactUs;
