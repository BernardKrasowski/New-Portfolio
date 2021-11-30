import React from "react";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./arrowButton.scss";

function ArrowButton({ path, arrowDirection = "arrow" }) {
  return (
    <a className="wrapper__arrow" href={path}>
      <IconButton>
        <KeyboardArrowDownIcon className={arrowDirection} />
      </IconButton>
    </a>
  );
}

export default ArrowButton;
