import React, { useEffect, useState } from "react";
import "./loader.css";
import { gsap } from "gsap";
function Loader() {
   const [repeat, setRepeat] = useState(false)
  useEffect(() => {
    gsap.fromTo(".bubble", {
      top: "100%",
    },
     {
      top: "-30%",
      duration: 25,
      onComplete: () => {
        setRepeat(!repeat);
      }
    })
  }, [repeat])
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
      <div className="bubble">
        <span></span> 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble first">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble second">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble third">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="bubble forth">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>  
    </div>
  );
}

export default Loader;
