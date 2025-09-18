import TopHeader from "@/app/components/TopHeader";
import TopSection from "@/app/components/TopSection";
import React from "react";
import { aboutUsData } from "@/app/lib/data";

const page = () => {
  const cardStyle =
    "bg-white rounded-lg p-5 md:p-8 shadow-sm transform translate-y-2.5 transition-all duration-300 ease hover:translate-y-0 ";
  return (
    <>
      <TopHeader
        title="About Skillbridge"
        description="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />
      <TopSection
        title="Achievements"
        description="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements:"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {aboutUsData.achievements.map(({ id, icon, title, description }) => (
          <div className={cardStyle}>
            <div className=" flex items-center justify-center bg-amber-50 border border-amber-500 rounded-md w-12 h-12 p-2 mb-5">
              <span className="text-amber-500 text-2xl">{icon}</span>
            </div>
            <h1 className="text-gray-800 font-semibold text-lg mb-2" key={id}>
              {title}
            </h1>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </section>

      <TopSection
        title="Our Goals"
        description="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
        Through our carefully crafted courses, we aim to"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {aboutUsData.goals.map(({ id, icon, title, description }) => (
          <div className={cardStyle}>
            <div className=" flex items-center justify-center bg-amber-50 border border-amber-500 rounded-md w-12 h-12 p-2 mb-5">
              <span className="text-amber-500 text-xl">{icon}</span>
            </div>
            <h1 className="text-gray-800 font-semibold text-lg mb-2" key={id}>
              {title}
            </h1>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
