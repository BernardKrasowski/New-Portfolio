import React from "react";
import "./loginWindow.scss";

function LoginWindow() {
  return (
    <div className="loginWindow">
      <form action="submit" className="loginForm">
        <label htmlFor="">Login:</label> <input type="text" />
        <label htmlFor="">Password:</label> <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginWindow;
