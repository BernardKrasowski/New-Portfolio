import React, { useState } from "react";
import "./contact.scss";
import { createPost } from "../axios/index.js";
import { AppContext } from "../../AppContext";
import ArrowButton from "../arrowButton/ArrowButton";
import Phone from "./img/phone.png";
import Mail from "./img/mail.png";
import github from "./img/github.png";
import Cart from "./cart.component";
import { Dry } from "@mui/icons-material";

const contact_data = [
  {
    id: 1,
    img: Phone,
    data: "+44 77 62 914 630",
  },
  {
    id: 2,
    img: Mail,
    data: "bernardkrasowski111@gmail.com",
  },
  {
    id: 3,
    img: github,
    data: "https://github.com/BernardKrasowski",
  },
];

function Contact({ menuOpen }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rightScreen, setRightScreen] = useState("");

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

  const showRightScreen = (id) => {
    setRightScreen(id);
    console.log(rightScreen);
  };

  return (
    <div className={`contact ${menuOpen && "active"}`} id="contact">
      <div className="left_screen">
        <span className="title">
          <p>
            Have You Any Questions? <p> I'm at your services </p>
          </p>
        </span>
        {contact_data.map((cart) => (
          <Cart key={cart.id} cart={cart} show={showRightScreen} />
        ))}
      </div>
      <div className="line"></div>
      <form onSubmit={sendEmail} className="contact_form">
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
