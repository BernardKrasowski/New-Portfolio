import React from "react";
import "./logout.scss";
import { AppContext } from "../../../AppContext.js";

import LogoutIcon from "@mui/icons-material/Logout";
function Logout() {
  return (
    <AppContext.Consumer>
      {({ toggleLoggedState }) => (
        <div className="logout" onClick={() => toggleLoggedState()}>
          <LogoutIcon className="iconLogout" />
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Logout;
