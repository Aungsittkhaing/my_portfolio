import React from "react";
import {
  DiBootstrap,
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript,
  DiLaravel,
  DiMongodb,
  DiNodejsSmall,
  DiPhp,
  DiReact,
  DiSass,
} from "react-icons/di";
import projectOne from "../assets/projectOne.jpeg";
import projectFive from "../assets/projectFive.jpeg";
import projectSeven from "../assets/projectSeven.png";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <div className="md:hidden bg-white p-8 rounded-xl bg-opacity-10 backdrop-blur-lg flex flex-wrap justify-center gap-4 text-4xl">
        <DiHtml5 className="text-orange-500" />
        <DiCss3 className="text-blue-500" />
        <DiBootstrap className="text-purple-500" />
        <DiSass className="text-pink-500" />
        <DiJavascript className="text-yellow-500" />
        <DiReact className="text-sky-500" />
        <DiNodejsSmall className="text-green-500" />
        <DiPhp className="text-violet-500" />
        <DiLaravel className="text-red-500" />
      </div>
      <div className="relative group cursor-pointer">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 transform rotate-2 rounded-lg blur-xl opacity-25 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
        <div className="relative w-full p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg hover:bg-opacity-30 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src={projectOne} className="rounded-lg md:max-w-[500px]" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl md:text-4xl text-gray-200 font-bold mb-4">
          Skills
        </h2>
        <p className="text-gray-300 mb-4">
          As a passionate web front-end developer with over 2 years of
          experience, I have some projects of creating web applications and
          responsive websites.
        </p>
        <div className="md:flex flex-wrap justify-center gap-4 text-2xl hidden">
          <DiHtml5 className="text-orange-500" />
          <DiCss3 className="text-blue-500" />
          <DiBootstrap className="text-purple-500" />
          <DiSass className="text-pink-500" />
          <DiJavascript className="text-yellow-500" />
          <DiReact className="text-sky-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiPhp className="text-violet-500" />
          <DiLaravel className="text-red-500" />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl md:text-4xl text-gray-200 font-bold mb-4">
          FrontEnd Experience
        </h2>
        <p className="text-gray-300 mb-4">
          Experienced in creating responsive websites using HTML, CSS,
          Bootstrap, Sass, JavaScript and React.
        </p>
        <div className="md:flex flex-wrap justify-center gap-4 text-2xl hidden">
          <DiHtml5 className="text-orange-500" />
          <DiCss3 className="text-blue-500" />
          <DiBootstrap className="text-purple-500" />
          <DiSass className="text-pink-500" />
          <DiJavascript className="text-yellow-500" />
          <DiReact className="text-sky-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiPhp className="text-violet-500" />
          <DiLaravel className="text-red-500" />
        </div>
      </div>
      <div className="relative group cursor-pointer">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 transform rotate-2 rounded-lg blur-xl opacity-25 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
        <div className="relative w-full p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg hover:bg-opacity-30 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src={projectFive} className="rounded-lg md:max-w-[500px]" />
        </div>
      </div>

      <div className="relative group cursor-pointer">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 transform rotate-2 rounded-lg blur-xl opacity-25 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
        <div className="relative w-full p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg hover:bg-opacity-30 hover:shadow-2xl transition duration-300 ease-in-out">
          <img src={projectSeven} className="rounded-lg md:max-w-[500px]" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl md:text-4xl text-gray-200 font-bold mb-4">
          FullStack Experience
        </h2>
        <p className="text-gray-300 mb-4">
          Skill in developing end-to-end solutions using fullstack technologies.
        </p>
        <div className="md:flex flex-wrap justify-center gap-4 text-2xl hidden">
          <DiReact className="text-sky-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiLaravel className="text-red-500" />
          <DiGithubBadge className="text-gray-500" />
          <DiMongodb className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default About;
