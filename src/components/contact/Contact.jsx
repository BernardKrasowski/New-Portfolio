import React, { useState } from "react";
import "./contact.scss";
import { createPost } from "../axios/index.js";
import { AppContext } from "../../AppContext";
import ArrowButton from "../arrowButton/ArrowButton";
function Contact({ menuOpen }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
    <div className={`contact ${menuOpen && "active"}`}>
      <div className="contact_wrapper" id="contact">
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
      {/* <AppContext.Consumer>
        {({ isUserLogged }) => (
          <ArrowButton
            path={`${isUserLogged ? "#adminPage" : "#intro"}`}
            arrowDirection={isUserLogged ? "arrow" : "arrow360"}
          />
        )}
      </AppContext.Consumer> */}
    </div>
  );
}

export default Contact;
