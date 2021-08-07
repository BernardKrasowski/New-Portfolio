import React from "react";
import "./contact.scss";
import imgContact from "../../images/contact.jpg";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={imgContact} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
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
