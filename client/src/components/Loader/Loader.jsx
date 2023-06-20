import React from "react";
import "./loader.css";
function Loader() {
  return (
    <div className="loading-page">
      <h2 className="welcome-title">Welcome to</h2>
      <img
        className="welcome-img"
        src="./assets/Bunny.png"
        width={200}
        height={200}
      />
      <h1 className="welcome-content">Bunny</h1>
      <h1 className="welcome-content">Flower Shop </h1>

      <div className="loading-circle"></div>
    </div>
  );
}

export default Loader;
