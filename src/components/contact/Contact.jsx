import React, { useState } from "react";
import "./contact.scss";
import { createPost } from "../axios/index.js";
import { AppContext } from "../../AppContext";
import ArrowButton from "../arrowButton/ArrowButton";

import Cart from "./cart.component";
import { ReactComponent as IconGitHub } from "./img/github-brands.svg";
import { ReactComponent as IconPhone } from "./img/phone-solid.svg";
import { ReactComponent as IconMail } from "./img/envelope-solid.svg";

const contact_data = [
  {
    id: 1,
    img: <IconPhone className="IconPhone" />,
    data: "+44 77 62 914 630",
  },
  {
    id: 2,
    img: <IconMail className="IconMail" />,
    data: "bernardkrasowski111@gmail.com",
  },
  {
    id: 3,
    img: <IconGitHub className="IconGitHub" />,
    data: "https://github.com/BernardKrasowski",
  },
];

function Contact({ menuOpen }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    console.log("dziala");
    // e.preventDefault();
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
    <div className={`contact ${menuOpen && "active"}`} id="contact">
      <div className="left_screen">
        <span className="title">
          <p>Have You Any Questions?</p> <p> I'm at your services </p>
        </span>
      </div>
      <div className="right_screen">
        {contact_data.map(({ id, img, data }) => (
          <Cart key={id} data={data} img={img} />
        ))}
      </div>
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <ArrowButton
            path={`${isUserLogged ? "adminPage" : "#"}`}
            arrowDirection={isUserLogged ? "arrow" : "arrow360"}
          />
        )}
      </AppContext.Consumer>
    </div>
  );
}

export default Contact;
