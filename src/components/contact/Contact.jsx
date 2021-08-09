import React from "react";
import "./contact.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";

function Contact({ menuOpen }) {
  return (
    <div className={`contact_wrapper ${menuOpen && "active"}`}>
      <a href="#intro">
        <IconButton>
          <KeyboardArrowDownIcon className="arrow" />
        </IconButton>
      </a>
      <div className="contact" id="contact">
        <h2>Contact</h2>
        <div className="img"></div>
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
