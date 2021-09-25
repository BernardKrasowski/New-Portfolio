import "./app.scss";
import Topbar from "./components/topbar/Topbar.jsx";
import Menu from "./components/menu/Menu.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/Login/Login.jsx";
import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminPage, setAdminPage] = useState(false);
  return (
    <div className="app">
      <Login />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro menuOpen={menuOpen} />
        <Portfolio />
        <Contact menuOpen={menuOpen} />
      </div>
    </div>
  );
}

export default App;
