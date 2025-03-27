import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      className="px-6 max-w-[1200px] mx-auto grid md:grid-cols-2 glass place-items-center"
      id="contact"
    >
      <ul className="my-auto pr-6">
        <li className="flex">
          <IoPhonePortraitOutline className="w-[55px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Contact</h3>
            <p className="text-gray-400">Mobile : 09-778839001</p>
            <span className="text-gray-400">
              Email : aungsittkhaing695@gmail.com
            </span>
          </div>
        </li>
        <li className="flex">
          <AiOutlineLaptop className="w-[55px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Working Hours</h3>
            <p className="text-gray-400">Mon-Fri : 9am - 5pm</p>
          </div>
        </li>
      </ul>
      <form
        action="https://getform.io/f/bmdkpega"
        id="form"
        className="max-w-6xl md:p-12"
        method="POST"
      >
        <input
          type="text"
          className="w-full mb-2 rounded-md border border-gray-200 py-2 pl-2 pr-4"
          placeholder="Name"
          name="name"
          id="name"
        />
        <input
          type="email"
          className="w-full mb-2 rounded-md border border-gray-200 py-2 pl-2 pr-4"
          placeholder="Email"
          name="email"
          id="email"
        />
        <textarea
          name="message"
          id="message"
          cols="20"
          rows="4"
          className="w-full mb-2 rounded-md border border-gray-200 py-2 pl-2 pr-4"
          placeholder="Message"
        ></textarea>
        <button className="bg-sky-600 w-full text-gray-200 py-2 px-4 rounded-lg hover:bg-sky-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
