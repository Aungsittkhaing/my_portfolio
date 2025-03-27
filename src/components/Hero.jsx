import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.svg";
import ShinyEffect from "./ShinyEffect";
const Hero = () => {
  return (
    <div
      id="home"
      className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14"
    >
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl tracking-tight">
          Hello, I'm
          <br />
          <span className="text-sky-600">AUNG SITT KHAING</span> <br />
          <TypeAnimation
            sequence={["Web Designer", 1000, "Web Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300">with 2+ years of experience</h2>
        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          <a
            href="https://drive.google.com/file/d/1CB1ceqRQKFi_3mwbHpYlcedof6Vs8e-9/view?usp=drive_link"
            className="text-center font-bold cursor-pointer text-gray-200 w-1/2 mt-6 p-2 z-10 bg-blue-500 rounded-xl transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            Download CV
          </a>
          <a
            href="https://github.com/Aungsittkhaing?tab=repositories"
            className="text-center font-bold cursor-pointer text-gray-200 w-1/2 mt-6 p-2 z-10 rounded-xl border border-gray-400 transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={200} size={1400} />
        </div>
        <ShinyEffect left={100} top={200} size={1200} />
      </div>
      <img
        src={profile}
        className="w-[200px] md:w-[400px] bg-[ #282727, #201e1e]"
      />
    </div>
  );
};

export default Hero;
