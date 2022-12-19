import React from "react";
import HeadingTop from "../components/HeadingTop";
import Main from "../components/Main";

function Resume() {
  return <div className="">
  <Main>
    <HeadingTop>
      Resume
    </HeadingTop>

    <p>
    Reach out to me via my contact page . view or download the resume.
    </p>

    <iframe title="Ketan Resume" className="w-full py-5 h-[700px] sm:h-[800px] md:[1000px]" src="https://drive.google.com/file/d/1TTvjTiuFiviZUbV3lVi-c7qTtkeQUb4j/preview" width="640" allow="autoplay"></iframe>
    </Main>
  </div>;
}

export default Resume;
