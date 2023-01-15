import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi There,
            <br className="hidden lg:inline-block" />Web Development Services, Graphic Designing, Acedemic Writing Services
            Available
          </h1>
 
          <div className="flex justify-center hover:mb-8">
            <a
              href="#contact"
              className="inline-flex text-white transition bg-red-800 border-2 hover:border-red-800 py-2 px-6 focus:outline-none hover:bg-red-200 border-red-200 hover:text-black font-bold	 rounded-xl text-lg">
              Hire Me
            </a>
            <a
              href="#projects"
              className="transition font-bold rounded-xl ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Work
            </a>
            <a
              href="cv.pdf"
              className="transition font-bold rounded-xl ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
