import React from "react";

const Project = (props) => {
  return <div className="m-2 border border-gray-300 shadow-md shadow-gray sm:w-[45%] md:w-[45%] hover:opacity-80 transition-all">
    <div className="h-30 object-fill">
        <img className="object-fill h-30 w-[100%]" src="https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif" alt="this is alt"/>
    </div>
    <div id="projectInfo" className="p-2 md:p-6">
        <h1 className="font-bold text-xl mb-1 md:mb-4 md:text-3xl">Exercise application</h1>
        <p className="text-1xl md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quam tenetur similique laboriosam magnam natus eos? Tenetur blanditiis molestias beatae!</p>
    </div>
  </div>;
};

export default Project;
