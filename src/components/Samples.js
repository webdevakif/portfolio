import { PaperAirplaneIcon } from "@heroicons/react/solid";
import React from "react";
import { samples } from "../data";


export default function Samples() {
  return (
<section id="samples" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <PaperAirplaneIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Graphic Designing Work And Samples
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This section is to demo my work as a Graphic Designer.  
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {samples.map((sample) => (
            <a
              href={sample.link}
              key={sample.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative py-8">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={sample.image}
                />
                <div className="px-8 py-10 relative z-5 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {sample.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {sample.title}
                  </h1>
                  <p className="leading-relaxed">{sample.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
