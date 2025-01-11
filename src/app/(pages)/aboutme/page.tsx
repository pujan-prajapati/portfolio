"use client";

import { Navbar } from "@/app/_components/Navbar";
import SkillCard from "@/app/_components/SkillCard";
import { Wrapper } from "@/app/_components/Wrapper";
import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const AboutMe = () => {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <h1 className="text-center text-7xl mt-20 font-bold text-[#FF0000] ">
        ABOUT ME
      </h1>

      {/* My image */}
      <Wrapper className="my-10">
        <div className="flex justify-between items-center group">
          <img
            src="/me/me4.jpg"
            alt="me4"
            className="h-[300px] w-[200px] object-cover transition-all duration-300 group-hover:opacity-50 group-hover:filter group-hover:brightness-50 hover:!opacity-100 hover:!filter-none"
          />
          <img
            src="/me/me4.jpg"
            alt="me3"
            className="h-[350px] w-[270px] object-cover transition-all duration-300 group-hover:opacity-50 group-hover:filter group-hover:brightness-50 hover:!opacity-100 hover:!filter-none"
          />
          <img
            src="/me/me1.jpg"
            alt="me1"
            className="h-[400px] w-[300px] object-cover transition-all duration-300 group-hover:opacity-50 group-hover:filter group-hover:brightness-50 hover:!opacity-100 hover:!filter-none"
          />
          <img
            src="/me/me2.jpg"
            alt="me2"
            className="h-[350px] w-[270px] object-cover transition-all duration-300 group-hover:opacity-50 group-hover:filter group-hover:brightness-50 hover:!opacity-100 hover:!filter-none"
          />
          <img
            src="/me/me4.jpg"
            alt="me5"
            className="h-[300px] w-[200px] object-cover transition-all duration-300 group-hover:opacity-50 group-hover:filter group-hover:brightness-50 hover:!opacity-100 hover:!filter-none"
          />
        </div>

        {/* Scroll Down Section */}
        <div
          onClick={handleScroll}
          className="flex flex-col cursor-pointer items-center gap-3 justify-center mt-20"
        >
          <h3 className="text-xl">Scroll down</h3>
          <FaChevronDown className="vert-move text-[#FF0000] cursor-pointer" />
        </div>
      </Wrapper>

      <section ref={scrollTargetRef}>
        <Wrapper>
          <h2 className="text-4xl mb-8 font-bold ">SKILLS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
            <SkillCard
              imgSrc="/skills/skill1.webp"
              title="Web Development"
              description=" I have experience building websites using HTML, CSS, JavaScript,
                   React, Node.js, and MongoDB."
            />

            <SkillCard
              imgSrc="/skills/skill2.png"
              title="Designing"
              description="I have experience using Figma and Canva to design websites and social media posts as well as logos."
            />

            <SkillCard
              imgSrc="/skills/skill3.png"
              title="Android Development"
              description="I have experience building Android apps using Flutter"
            />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default AboutMe;
