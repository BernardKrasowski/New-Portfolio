import React, { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "designe",
      title: "Featured",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

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
        <div className="item">
          <img
            src="https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
