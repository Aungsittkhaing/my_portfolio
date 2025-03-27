import React from "react";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">
          Aung Sitt Khaing
        </h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://www.linkedin.com/in/aung-sitt-khaing-723311233">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/aungsitt.khaing.3">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
      <p className="text-gray-400">&copy; 2025 Aung Sitt Khaing</p>
    </div>
  );
};

export default Footer;
