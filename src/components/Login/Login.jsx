import React, { useState } from "react";
import "./login.scss";
import LoginWindow from "./loginWindow/LoginWindow.jsx";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Login() {
  const [showLoginWindow, setShowLoginWindow] = useState(false);

  const styleIcon = {
    width: "70px",
    height: "70px",
    borderRadius: "100%",
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9999",
    position: "fixed",
    right: "20px",
    bottom: "20px",
  };
  return (
    <>
      <div
        className="login"
        style={styleIcon}
        onClick={() => setShowLoginWindow(!showLoginWindow)}
      >
        <AccountCircleIcon className="iconLogin" />
      </div>
      {showLoginWindow ? <LoginWindow /> : null}
    </>
  );
}

export default Login;

// const [moveX, setMoveX] = useState("10px");
// const [moveY, setMoveY] = useState("10px");
// const [moveActive, setMoveActive] = useState(false);

// const mouseDown = () => {
//   setMoveActive(true);
// };
// const moveIcon = (e) => {
//   if (moveActive) {
//     setMoveX(`${e.clientX - 35}px`);
//     setMoveY(`${e.clientY - 35}px`);
//   }
// };
// const mouseUp = () => {
//   setMoveActive(false);
// };
// const styleIcon = {
//   // width: "70px",
//   // height: "70px",
//   borderRadius: "100%",
//   boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
//     0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
//     0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
//     0 100px 80px rgba(0, 0, 0, 0.12)`,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: "9999",
//   position: "fixed",
//   left: moveX,
//   top: moveY,
