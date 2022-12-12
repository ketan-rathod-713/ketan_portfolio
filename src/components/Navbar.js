import Navbtn from "./Navbtn";
import React, { useContext } from "react";
import themeContext from "../context/themeContext";

function Navbar(props) {
  const Theme = useContext(themeContext);
  console.log("something")
  // for toggling the mode of the page dark and light
  const toggleMode = ()=>{
    const mode = Theme.state.theme;
    if(mode === 'light'){
      Theme.update({"theme":"dark"})
    } else {
      Theme.update({"theme":"light"})
    }
  }



  return <div className="h-fit p-10 justify-around bg-blue-500 sm:flex items-center">
   <div>something</div>
   <div className="md:flex md:space-x-10 items-center">
   <Navbtn title="About"/>
    <Navbtn title="Projects"/>
    <Navbtn title="Resume"/>
    <Navbtn title="Contact"/>
    <button onClick={toggleMode}> Toggle {Theme.state.theme}</button>
   </div>
  </div>;
}

export default Navbar;
