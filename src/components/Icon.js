import React from "react";
import icons from "../assets/icons.svg";

const Icon = props => (
  <svg>
    <use xlinkHref={`${icons}#${props.icon}`} />
  </svg>
);

export default Icon;
