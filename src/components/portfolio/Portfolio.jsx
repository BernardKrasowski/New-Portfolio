import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import "./portfolio.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import { projectsReact, projectsGames } from "../../data.jsx";

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
  useEffect(() => {
    switch (selected) {
      case "react":
        setData(projectsReact);
        break;
      case "javascript games":
        setData(projectsGames);
        break;
      default:
        setData(projectsReact);
    }
  }, [selected]);
  const showDescription = (e) => {
    console.log(e.target);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="itemWrapper">
            <h3>{d.title}</h3>
            <div className="item" onClick={showDescription}>
              <img src={d.img} alt="" />
            </div>
            <div className="icons">{d.icons}</div>
          </div>
        ))}
      </div>
      <a href="#contact">
        <IconButton>
          <KeyboardArrowDownIcon className="arrow" />
        </IconButton>
      </a>
    </div>
  );
}
