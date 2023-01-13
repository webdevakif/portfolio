import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Web Development Services
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center mb-4 mt-4">
          <a href="#projects" className="mr-5 hover:text-white font-bold">
            Work And Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white font-bold">
            Skills
          </a>
          <a href="#samples" className="mr-5 hover:text-white font-bold">
            Graphic Designing Samples
          </a>
          <a href="#contact" className="mr-5 hover:text-white font-bold">
            Acedemic Writing
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-white transition bg-red-800 border-2 hover:border-red-800 px-6 focus:outline-none hover:bg-red-200 border-red-200 hover:text-black font-bold rounded-xl py-2 text-md">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
