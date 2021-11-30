import "./menu.scss";
import { AppContext } from "../../AppContext.js";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <AppContext.Consumer>
          {({ isUserLogged }) => {
            if (isUserLogged) {
              return (
                <li>
                  <a href="#adminPage">Admin Page</a>
                </li>
              );
            }
          }}
        </AppContext.Consumer>
      </ul>
    </div>
  );
}
