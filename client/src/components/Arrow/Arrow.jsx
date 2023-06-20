import "./arrow.css";
import React from "react";

function Arrow({left, top, ...props}) {
  return (
    <div
    {...props}
      style={{
        ...props,
        left,
        top,
      }}
      className="arrow"
    ></div>
  );
}

export default Arrow;
