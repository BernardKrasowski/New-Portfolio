import React, { useState } from "react";
import "./contact.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import { createPost } from "../axios/index.js";
import { AppContext } from "../../AppContext";
function Contact({ menuOpen }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const rotate = {
    transform: `rotate(${360}deg)`,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const verificationEmail = checkEmail();
    const verificationMessage = checkMessage();
    if (verificationEmail && verificationMessage) {
      const emailMessage = {
        name,
        message,
      };
      postEmailMessage(emailMessage);
      setName("");
      setMessage("");
    } else {
      !verificationMessage && alert(`You didn't write a message.`);
      !verificationEmail && alert(`Wrong Name`);
    }
  };

  const checkEmail = () => {
    const index = [...name].findIndex((item) => item === "@");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <a href={`${isUserLogged ? "#adminPage" : "#intro"}`}>
            <IconButton>
              <KeyboardArrowDownIcon
                style={isUserLogged ? rotate : null}
                className="arrow"
              />
            </IconButton>
          </a>
        )}
      </AppContext.Consumer>
    </div>
  );
}

export default Contact;
