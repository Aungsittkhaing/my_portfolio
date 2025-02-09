import React from "react";
import { TypeAnimation } from "react-type-animation";
import myProfile from "../assets/myProfile.png";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl tracking-tight">
          Hey, I'm
          <br />
          <span className="text-sky-600">AUNG SITT KHAING</span> <br />
          <TypeAnimation
            sequence={[
              "Author",
              1000,
              "Web Designer",
              1000,
              "Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300">with 2+ years of experience</h2>
        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          <button className="font-bold cursor-pointer text-gray-200 w-1/2 mt-6 p-2 z-10 bg-blue-500 rounded-xl transform transition-transform hover:scale-105 hover:shadow-lg">
            Download CV
          </button>
          <button className="font-bold cursor-pointer text-gray-200 w-1/2 mt-6 p-2 z-10 rounded-xl border border-gray-400 transform transition-transform hover:scale-105 hover:shadow-lg">
            View Projects
          </button>
        </div>
      </div>
      <img src={myProfile} className="w-[300px] md:w-[500px]" />
    </div>
  );
};

export default Hero;
