import React, { useState } from "react";
import "./loginWindow.scss";
import { AppContext } from "../../../AppContext";

function LoginWindow({ closeLoginWindow }) {
  const [state, setState] = useState({
    login: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitPassword = (e, toggleLoggedState) => {
    e.preventDefault();
    if (state.login === "admin" && state.password === "admin") {
      toggleLoggedState();
      closeLoginWindow(false);
    } else {
      setState({ login: "", password: "" });
    }
    return;
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
            <input
              type="login"
              name="login"
              placeholder="Login"
              className="loginPage__input"
              value={state.login}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="loginPage__input"
              value={state.password}
              onChange={handleChange}
            />
            <button className="btnSubmit">Submit</button>
          </form>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default LoginWindow;
