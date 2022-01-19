import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import ArrowButton from "../arrowButton/ArrowButton";
export default function Intro({ menuOpen }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer"],
    });
  }, []);

  return (
    <div className={`intro ${menuOpen && "active"}`} id="intro">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Bernard Krasowski</h1>
        <h3>
          <span ref={textRef}></span>
        </h3>
      </div>
      {/* <ArrowButton path="#portfolio" /> */}
    </div>
  );
}
