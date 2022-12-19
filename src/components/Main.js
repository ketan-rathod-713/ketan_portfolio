import React from "react";

function Main(props) {
  return <div className="px-2 py-16 sm:px-10 md:px-20">
    {props.children}
  </div>;
}

export default Main;
