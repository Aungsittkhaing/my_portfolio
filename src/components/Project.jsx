import React, { useState } from "react";
import datatable from "../assets/datatable.png";
import movie_app from "../assets/movie_app.png";
import foods_project from "../assets/foods_project.png";
import student_dashboard from "../assets/student_dashboard.png";
import my_old_profile from "../assets/my_old_profile.png";
import my_shop from "../assets/my_shop.png";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: movie_app,
    title: "movie_app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    link: {
      site: "https://movie-app-eta-khaki.vercel.app",
      gitbub: "https://github.com/Aungsittkhaing/movie_app",
    },
  },
  {
    img: my_shop,
    title: "my_shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    link: {
      site: "https://ask-shop.netlify.app",
      gitbub: "https://github.com/Aungsittkhaing/my-shop",
    },
  },
  {
    img: foods_project,
    title: "foods_project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    link: {
      site: "https://papaya-sunflower-a965d0.netlify.app",
      gitbub: "https://github.com/Aungsittkhaing/my-foodie",
    },
  },
  {
    img: my_old_profile,
    title: "my_old_profile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    link: {
      site: "https://aungsittkhaing.netlify.app",
      gitbub: "https://github.com/Aungsittkhaing/profilewebsite",
    },
  },
  {
    img: student_dashboard,
    title: "student dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    link: {
      site: "https://github.com/Aungsittkhaing/blog_app",
      gitbub: "https://github.com/Aungsittkhaing/blog_app",
    },
  },
  {
    img: datatable,
    title: "Datatable",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    link: {
      site: "https://github.com/Aungsittkhaing/dataTable_app",
      gitbub: "https://github.com/Aungsittkhaing/dataTable_app",
    },
  },
];
const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <div
      id="project"
      className="max-w-[850px] relative mx-auto p-6 md:my-20 flex flex-col md:flex-row"
    >
      <div className="w-full p-6 border-2 max-w-[700px] glass">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            className="w-full h-full object-cover mb-4 rounded-lg"
          />
        </div>
        <p className="text-gray-200 my-4">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].link.site}
            className="px-4 py-2 bg-slate-500 text-gray-200 rounded-lg hover:bg-slate-600 transition duration-300"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].link.gitbub}
            className="px-4 py-2 bg-slate-500 text-gray-200 rounded-lg text-2xl hover:bg-gray-600 transition duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <ul className="z-10 ml-6 flex flex-row md:flex-col flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            className={`cursor-pointer text-gray-200 bg-slate-700 rounded-lg p-2 max-w-[200px] hover:bg-slate-700 transition duration-300 ${
              index === currentProject ? "bg-sky-600" : ""
            }`}
            key={index}
            onClick={() => setCurrentProject(index)}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
