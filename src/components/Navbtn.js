import React from "react";
import {Link} from 'react-router-dom'

function Navbtn(props) {
  return <div>
    <Link to={props.path}>{props.title}</Link>
  </div>;
}

export default Navbtn;
