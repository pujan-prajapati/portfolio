"use client";

import { Navbar } from "@/app/_components/Navbar";
import SkillCard from "@/app/_components/SkillCard";
import { Wrapper } from "@/app/_components/Wrapper";
import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Skills } from "../../_dto/skills";
import Aboutheading from "@/app/_components/Aboutheading";

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
            src="/me/me8.jpg"
            alt="me8"
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
            src="/me/me9.jpg"
            alt="me9"
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

      {/* About me */}
      <section ref={scrollTargetRef}>
        <Wrapper className="flex justify-between">
          <div>
            <Aboutheading title="INTRODUCTION" />

            <div className="max-w-[700px] text-justify">
              Welcome to My Portfolio! <br />
              <br />
              Hi, I’m Pujan Prajapati, a web developer, designer, and artist
              with a passion for creating beautiful and functional digital
              experiences. Currently pursuing a BSc. CSIT at Samriddhi College,
              I have experience in crafting dynamic web applications using the
              MERN stack, honed during my internship at GrowByData Nepal.
              <br />
              <br />
              Beyond coding, I’m an avid artist who finds inspiration in drawing
              and pottery. These creative outlets allow me to bring a unique
              perspective to my work, blending technical expertise with artistic
              vision.
              <br />
              <br />
              Feel free to explore my projects, art, and journey. Let’s connect
              and bring ideas to life together!
            </div>
          </div>
          <img src="/me/me6.png" alt="my image" className="w-80 dark:hidden" />
          <img
            src="/me/me7.png"
            alt="my image"
            className="w-80 hidden dark:block"
          />
        </Wrapper>
      </section>

      {/* skills */}
      <section>
        <Wrapper>
          <Aboutheading title="SKILLS" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
            {Skills.map((skill) => (
              <SkillCard
                key={skill.id}
                imgSrc={skill.imgSrc}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </Wrapper>
      </section>

      {/* projects */}
      <section>
        <Wrapper>
          <Aboutheading title="PROJECTS" />
        </Wrapper>
      </section>
    </>
  );
};

export default AboutMe;
