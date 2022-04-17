import "./menu.scss";
import { AppContext } from "../../AppContext.js";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <AppContext.Consumer>
          {({ isUserLogged }) => {
            if (isUserLogged) {
              return (
                <li>
                  <Link to="adminPage">Admin Page</Link>
                </li>
              );
            }
          }}
        </AppContext.Consumer>
      </ul>
    </div>
  );
}
