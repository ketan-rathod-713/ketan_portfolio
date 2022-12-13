import React from "react";
import {Link} from 'react-router-dom'

function Navbtn(props) {
  return <div>
    {/* <Link to={props.path}>{props.title}</Link> */}
    <li>
          <Link to={props.path} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
            {props.title}
          </Link>
        </li>
  </div>;
}

export default Navbtn;
