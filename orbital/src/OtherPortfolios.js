import OtherSide from "./Home/OtherSide";
import "./OtherPortfolio.css";
import PortfolioList from "./PortfolioList";
import { useOtherReview } from "./hooks/useOtherReview"
import React, { useState } from "react";
import { useParams } from "react-router-dom"
//import { FaComment } from "react-icons/fa6";

//After search button is clicked, a bunch of circles with the names of students who took that modules will be shown.

//After clicking on one of their names(maybe by making it a button), this page of their portfolio is brought up

//Also the portfolio shown has to be the one of the other users

const OtherPortfolio = () => {
  const { userId } = useParams();
  console.log(userId)
  const [showForm] = useState(false);
  const { reviews: portfolio, isPending, error } = useOtherReview(userId); // can you make this so that its the other user that they searched for
  console.log(portfolio);

  return (
    <div className={showForm ? "containergreyeout": "container"}>
      <div className="side-container">
        <OtherSide></OtherSide>
      </div >

      <div className="portfolio-main-container">
        {error && <div>{error}</div>}
        {isPending && <div className="port-loading"></div>}
        {portfolio && <PortfolioList portfolio={portfolio} />}
      </div>
      {/* <button onClick={handleClick} className="chat-button">
        <FaComment className="comment-pic"></FaComment>
      </button> */}
    </div>
  );
};

export default OtherPortfolio;
