import "./Home.css";
import Side from "./Side";
import img from "../images/Orbital Poster Final.png";
const Home = () => {
  return (
    <div className="container">
      <div className="side-container">
        <Side></Side>
      </div>

      <div className="full-main-container">
        <div className="main-container">
          <div className="title">Welcome to</div>
          <div className="img">
            <img className="main-logo" src={img} alt="logo" />

            <div className="about">About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
