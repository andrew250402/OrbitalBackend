import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../images/Orbital Poster Final.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="searchbar">{/* to be implemented */}</div>

      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/chats">Chats</Link>
        {/* Link the portfolio to the user's own portfolio page */}
        <Link to="/portfolio:myid">My Portfolio</Link>

        {/* Not sure if you have to do anything to the data when you log out or just redirect them to logout page. Please fix accordingly */}
        <Link to="/">Log Out</Link>
      </div>
    </nav>
  );
};

export default Navbar;
