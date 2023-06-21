import "./arrow.css";
import React from "react";

function Arrow({left, top, productListVisible, ...props }) {
  return (
    <button
    disabled={productListVisible}
    {...props}
      style={{
        ...props,
        left,
        top,
      }}
      className="arrow"
    ></button>
  );
}

export default Arrow;
