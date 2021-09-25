import React from "react";
import "./adminPage.scss";
import Logout from "./logout/Logout.jsx";
function AdminPage() {
  return (
    <div className="adminPage" id="adminPage">
      <h1 style={{ textAlign: "center" }}>Welcome on Admin Page</h1>
      <Logout />
    </div>
  );
}

export default AdminPage;
