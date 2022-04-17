import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hamburger from "./components/topbar/hamburger.component.jsx";
import Menu from "./components/menu/Menu.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/Login/Login.jsx";
import React, { useState } from "react";
import { AppContext, defaultObject } from "./AppContext.js";
import AdminPage from "./components/AdminPage/AdminPage";

export const item = () => <h1>dziala</h1>;

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
        <Routes>
          <Route path="/" element={<Intro menuOpen={menuOpen} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact menuOpen={menuOpen} />} />
        </Routes>

        {/* <Login /> */}
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {/* <div className="sections">
          {state.isUserLogged ? <AdminPage /> : null}
        </div> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
