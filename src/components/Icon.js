import React from "react";
import "../assets/icons.svg";

const Icon = props => (
  <svg>
    <use xlinkHref={`#${props.icon}`} />
  </svg>
);

export default Icon;
