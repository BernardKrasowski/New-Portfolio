import "./app.scss";
import Topbar from "./components/topbar/Topbar.jsx";
import Menu from "./components/menu/Menu.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/Login/Login.jsx";
import React, { useState } from "react";
import { AppContext, defaultObject } from "./AppContext.js";
import AdminPage from "./components/AdminPage/AdminPage";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [state, setState] = useState({
    isUserLogged: defaultObject.isUserLogged,
  });

  const handlerToggleStateIsLogged = () => {
    setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
  };
  return (
    <div className="app">
      <AppContext.Provider
        value={{
          isUserLogged: state.isUserLogged,
          toggleLoggedState: handlerToggleStateIsLogged,
        }}
      >
        <Login />
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro menuOpen={menuOpen} />
          <Portfolio />
          <Contact menuOpen={menuOpen} />
          {state.isUserLogged ? <AdminPage /> : console.log("nie dziala")}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
