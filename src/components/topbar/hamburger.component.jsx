import React from "react";
import "./hamburger.styles.scss";
// import { Person, Mail } from "@material-ui/icons";

export default function Hamburger({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper ">
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
