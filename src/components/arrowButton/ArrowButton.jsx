import React from "react";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./arrowButton.scss";
import { Link } from "react-router-dom";
function ArrowButton({ path, arrowDirection = "arrow" }) {
  return (
    <Link className="wrapper__arrow" to={`/${path}`}>
      <IconButton>
        <KeyboardArrowDownIcon className={arrowDirection} />
      </IconButton>
    </Link>
  );
}

export default ArrowButton;
