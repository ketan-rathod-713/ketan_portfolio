import Navbtn from "./Navbtn";
import React, { useContext } from "react";
import themeContext from "../context/themeContext";
import Switch from '@mui/material/Switch'

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



  return <div className="h-fit p-10 justify-around bg-blue-500 md:flex items-center">
   <div>Logo</div>
   <div className="md:flex space-y-5 md:space-y-0 md:space-x-10 items-center">
   <Navbtn title="About" path="/about"/>
    <Navbtn title="Projects" path="/projects"/>
    <Navbtn title="Resume" path="/resume"/>
    <Navbtn title="Contact" path="/contact"/>
    <button onClick={toggleMode}> Toggle {Theme.state.theme}</button>
    <Switch defaultChecked onClick={toggleMode}/>
   </div>
  </div>;
}

export default Navbar;
