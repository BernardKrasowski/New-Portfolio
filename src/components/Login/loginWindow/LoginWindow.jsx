import React from "react";
import "./loginWindow.scss";
import { AppContext } from "../../../AppContext";

function LoginWindow({ closeLoginWindow }) {
  const submitPassword = (e, toggleLoggedState) => {
    e.preventDefault();
    toggleLoggedState();
    closeLoginWindow(false);
  };
  return (
    <AppContext.Consumer>
      {({ toggleLoggedState }) => (
        <div className="loginWindow">
          <form
            onSubmit={(e) =>
              submitPassword(e, toggleLoggedState, closeLoginWindow)
            }
            className="loginForm"
          >
            <input type="login" placeholder="Login" />
            <input type="password" placeholder="password" />
            <button>Submit</button>
          </form>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default LoginWindow;
