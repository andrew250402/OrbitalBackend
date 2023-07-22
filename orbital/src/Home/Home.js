import "./Home.css";
import Side from "./Side";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  FaHouse,
  FaComments,
  FaFolderOpen,
  FaRightFromBracket,
} from "react-icons/fa6";
const Home = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="container">
      <div className="side-container">
        <Side></Side>
      </div>

      <div className="right-side-container">
        <div className="smaller-right-container">
          <Link className="link" to="/home">
            <div className="square home-container">
              <div className="container-home-pics">
                <FaHouse className="home-pics" />
              </div>

              <div className="home-word">Home</div>
            </div>
          </Link>

          <Link className="link" to="/portfolio/me">
            <div className="square portfolio-container">
              <div className="container-portfolio-pics">
                <FaFolderOpen className="portfolio-pics" />
              </div>
              <div className="portfolio-word"> Portfolio</div>
            </div>
          </Link>

          <Link className="link" to="/" onClick={handleClick}>
            {" "}
            <div className="square logout-container">
              <div className="container-log-pics">
                <FaRightFromBracket className="log-pics" />
              </div>
              <div className="log-word">Log Out</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
