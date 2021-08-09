import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import "./portfolio.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import { projectsReact, projectsGame } from "../../data.jsx";

export default function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "Reactjs",
    },
    {
      id: "javascript games",
      title: "JavaScript Games",
    },
  ];

  // useEffect(() => {
  //   switch (selected) {
  //     case "react":
  //       setData(projectsReact);
  //   }
  // }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
      <a href="#contact">
        <IconButton>
          <KeyboardArrowDownIcon className="arrow" />
        </IconButton>
      </a>
    </div>
  );
}
