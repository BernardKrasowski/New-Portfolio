import React, { useState } from "react";
import "./adminPage.scss";
import Logout from "./logout/Logout.jsx";
import { fetchPost } from "../axios";
import Messages from "./messages/Messages.jsx";
function AdminPage() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    fetchPost().then((respond) => setMessages(respond.data));
  };
  return (
    <div className="adminPage" id="adminPage">
      <h1>Welcome on Admin Page</h1>
      <div className="container">
        {messages.map(({ name, message, _id }) => (
          <Messages key={_id} name={name} message={message} />
        ))}
        <button onClick={fetchMessages} className="ShowMessages">
          Show Messages
        </button>
      </div>
      <Logout />
    </div>
  );
}

export default AdminPage;
