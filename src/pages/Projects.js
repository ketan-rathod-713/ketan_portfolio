import React from "react";
import HeadingTop from "../components/HeadingTop";
import Main from "../components/Main";
import Project from "../components/Project";

function Projects() {
  return <div>
    <Main>
    <HeadingTop>
      Projects
    </HeadingTop>
    <div className="p-2 sm:flex sm:flex-col md:flex-row md:flex md:justify-between flex-wrap">
      <Project></Project>
      <Project></Project>
      <Project></Project>
     
    </div>
    </Main>
  </div>;
}

export default Projects;
