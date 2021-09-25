import React, { useState } from "react";
import "./contact.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import { createPost } from "../axios/index.js";

function Contact({ menuOpen }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const verificationEmail = checkEmail();
    const verificationMessage = checkMessage();
    if (verificationEmail && verificationMessage) {
      const emailMessage = {
        email,
        message,
      };
      postEmailMessage(emailMessage);
      setEmail("");
      setMessage("");
    } else {
      !verificationMessage && alert(`You didn't write a message.`);
      !verificationEmail && alert(`Wrong Email`);
    }
  };

  const checkEmail = () => {
    const index = [...email].findIndex((item) => item === "@");
    return index !== -1 ? true : false;
  };
  const checkMessage = () => {
    return message ? true : false;
  };
  const postEmailMessage = (emailMessage) => {
    createPost(emailMessage);
  };

  return (
    <div className={`contact_wrapper ${menuOpen && "active"}`}>
      <div className="contact" id="contact">
        <h2>Contact</h2>
        <div className="img"></div>
        <form onSubmit={sendEmail}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <a href="#intro">
        <IconButton>
          <KeyboardArrowDownIcon className="arrow" />
        </IconButton>
      </a>
    </div>
  );
}

export default Contact;
