import React from "react";

const Project = (props) => {
  return <div className="mt-5 h-80 rounded-xl relative border border-gray-300 shadow-md shadow-gray sm:w-[100%] md:w-[45%]">
  
    <div className="absolute inset-0 hover:opacity-100 bg-center bg-blue-300">
    </div>
    <div id="projectInfo" className="p-2 md:p-6 absolute bottom-0 opacity-0 h-4/5 hover:opacity-100 transition-all duration-500 items-start justify-end flex flex-col">
        <h1 className="font-bold text-xl mb-1 md:mb-4 md:text-3xl">Exercise application</h1>
        <p className="text-1xl md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quam tenetur similique laboriosam magnam natus eos? Tenetur blanditiis molestias beatae!</p>
    </div>
  </div>;
};

export default Project;
