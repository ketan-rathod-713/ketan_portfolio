import React from "react";

function Link(props) {
  return <Link to={props.to}>{props.children}</Link>;
}

export default Link;
