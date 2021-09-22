import imgSaper from "./images/saper/saper1.png";
import imgBlackJack from "./images/blackJack/blackJack1.png";
import imgRockPaperScissor from "./images/rockPaperScissors/img1.png";
import wheaterApp from "./images/weatherapp/weatherapp.jpg";
import wordSearch from "./images/wordSearch/wordSearch.jpg";

export const projectsReact = [
  {
    id: 1,
    title: "Weather app",
    img: wheaterApp,
  },
  {
    id: 2,
    title: "Word Search",
    img: wordSearch,
  },
];
export const projectsGames = [
  {
    id: 1,
    title: "Saper",
    img: imgSaper,
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
    id: 2,
    title: "BlackJack",
    img: imgBlackJack,
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
    id: 2,
    title: "Rock-Paper-Scissors",
    img: imgRockPaperScissor,
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
