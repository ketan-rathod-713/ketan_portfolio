import React from "react";

function HeadingTop(props) {
  return <h1 className="text-5xl pr-5 pt-5 pb-5 font-bold">
    {props.children}
  </h1>;
}

export default HeadingTop;
