import Side from "../Home/Side";
import "./MyPortfolio.css";
import PortfolioList from "../PortfolioList";
import { useReview } from "../hooks/useReview";
import Form from "./Form";
import React, { useState } from "react";
// Brief Overview of Porfolio Details page. Clicking My Portfolio will send them to their specific own portfolio with their own database.

//For the other portion to work, each user in db.json must be linked to their own database (portfolio.json) with their personal mod reviews and programmes. Please do the necessary linkage so from the id in db.json , we can go to the correct portfolio.json data  base and pull out their personal reviews.
const MyPortfolio = () => {
  const { reviews: portfolio, isPending, error } = useReview();
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className={showForm ? "container greyedout" : "container"}>
      <div className="side-container">
        <Side></Side>
      </div>

      <div className="portfolio-main-container">
        {error && <div>{error}</div>}
        {isPending && <div className="port-loading"></div>}
        {portfolio && <PortfolioList portfolio={portfolio} />}
      </div>
      <button onClick={handleClick} className="add-button">
        <p>+</p>
      </button>
      {showForm && (
        <Form
          showForm={showForm}
          handleClick={handleClick}
          className={showForm ? "form notgreyedout" : "form"}
        ></Form>
      )}
    </div>
  );
};

export default MyPortfolio;
