import React from "react";
import "./messages.scss";
function Messages({ name, message }) {
  return (
    <div className="messages">
      <p className="name">Name: {name}</p>
      <p className="message">Messages: {message}</p>
    </div>
  );
}

export default Messages;
