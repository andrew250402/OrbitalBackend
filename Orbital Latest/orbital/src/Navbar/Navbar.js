import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../images/Orbital Poster Final.png";
import "./Navbar.css";
import {
  FaHouse,
  FaComments,
  FaFolderOpen,
  FaRightFromBracket,
} from "react-icons/fa6";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <SearchBar />

      <div className="links">
        <div className="column home">
          <Link className="link" to="/home">
            <div className="icon">
              <FaHouse className="pic" />
            </div>
            Home
          </Link>
        </div>

        <div className="column chats">
          <Link className="link" to="/chats">
            <div className="icon">
              <FaComments className="pic" />
            </div>
            Chats
          </Link>
        </div>

        <div className="column portfolio">
          {/* Link the portfolio to the user's own portfolio page */}

          <Link className="link" to="/portfolio/1">
            <div className="icon">
              <FaFolderOpen className="pic" />
            </div>
            My Portfolio
          </Link>
        </div>

        {/* Not sure if you have to do anything to the data when you log out or just redirect them to logout page. Please fix accordingly */}
        <div className="column logout">
          <Link className="link" to="/">
            <div className="icon">
              <FaRightFromBracket className="pic" />
            </div>
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
