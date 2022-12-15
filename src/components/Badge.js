import React from "react";

function Badge(props) {
  return <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline hover:bg-green-600 bg-gray-200 hover:text-white text-black rounded transition-all duration-400 ease-in">
    {props.children}
  </span>;
}

export default Badge;
