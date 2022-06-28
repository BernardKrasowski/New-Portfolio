import imgSaper from "./images/saper/saper1.png";
import imgBlackJack from "./images/blackJack/blackJack1.png";
import imgRockPaperScissor from "./images/rockPaperScissors/img1.png";
import wheaterApp from "./images/weatherapp/weatherapp.jpg";
import wordSearch from "./images/wordSearch/wordSearch.jpg";
import eCommerce from "./images/eCommerce/eCommerce.jpg";
export const projectsReact = [
  {
    id: 1,
    title: "Weather app",
    img: wheaterApp,
    urlGitHub: "https://wheatherapp-cb4b5.web.app",
  },
  {
    id: 2,
    title: "Word Search",
    img: wordSearch,
    urlGitHub: "https://wikipediaapp-7a7f8.web.app",
  },
  {
    id: 3,
    title: "e-Commerce (work in progress)",
    img: eCommerce,
    urlGitHub: "https://eloquent-florentine-751567.netlify.app",
  },
];
export const projectsGames = [
  {
    id: 3,
    title: "Saper",
    img: imgSaper,
    urlGitHub: "https://saper-ddeae.web.app",
    icons: (
      <>
        <i class="fab fa-html5" style={{ color: "orange", fontSize: 40 }}></i>
        <i
          class="fab fa-css3"
          style={{ color: "rgb(33,150,243)", fontSize: 40 }}
        ></i>
        <i
          class="fab fa-js-square"
          style={{ color: "rgb(254,215,2)", fontSize: 40 }}
        ></i>
      </>
    ),
  },
  {
    id: 4,
    title: "BlackJack",
    img: imgBlackJack,
    urlGitHub: "https://blackjack-cc33c.web.app/",
    icons: (
      <>
        <i class="fab fa-html5" style={{ color: "orange", fontSize: 40 }}></i>
        <i
          class="fab fa-css3"
          style={{ color: "rgb(33,150,243)", fontSize: 40 }}
        ></i>
        <i
          class="fab fa-js-square"
          style={{ color: "rgb(254,215,2)", fontSize: 40 }}
        ></i>
      </>
    ),
  },
  {
    id: 5,
    title: "Rock-Paper-Scissors",
    img: imgRockPaperScissor,
    urlGitHub: "https://rock-paper-scissors-7c898.web.app",
    icons: (
      <>
        <i class="fab fa-html5" style={{ color: "orange", fontSize: 40 }}></i>
        <i
          class="fab fa-css3"
          style={{ color: "rgb(33,150,243)", fontSize: 40 }}
        ></i>
        <i
          class="fab fa-js-square"
          style={{ color: "rgb(254,215,2)", fontSize: 40 }}
        ></i>
      </>
    ),
  },
];
