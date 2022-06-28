import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import "./portfolio.scss";
import ArrowButton from "../arrowButton/ArrowButton";
import { projectsReact, projectsGames } from "../../data.jsx";
import { useNavigate } from "react-router-dom";
import { WindowSharp } from "@mui/icons-material";

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
    <div className="wrapper_portfolio">
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
          <div
            key={d.id}
            className="itemWrapper"
            onClick={() => (window.location.href = `${d.urlGitHub}`)}
          >
            <div className="itemContainer">
              {/* <h3>{d.title}</h3> */}
              <div
                className="item"
                onClick={showDescription}
                style={{ backgroundImage: `url(${d.img})` }}
              >
                {/* <img src={d.img} alt="" /> */}
              </div>
              <div className="icons">{d.icons}</div>
            </div>
          </div>
        ))}
      </div>
      <ArrowButton path="contact" />
    </div>
  );
}
