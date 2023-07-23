import Side from "../Home/Side";
import "./MyPortfolio.css";
import PortfolioList from "../PortfolioList";
import { useReview } from "../hooks/useReview";
import { useReviewsContext } from "../hooks/useReviewsContext";
import { useAuthContext } from '../hooks/useAuthContext'
import Form from "./Form";
import React, { useState } from "react";

const MyPortfolio = () => {
  const { reviews: portfolio, isPending, error } = useReview();
  const { dispatch } = useReviewsContext()
  const { user } = useAuthContext()
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  const handleDelete = async (reviewId) => {
    const response = await fetch(`/api/review/${reviewId}`, {
      method: 'DELETE',
      header:{
      'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    console.log(json)

    if (response.ok) {
      dispatch({type: 'DELETE_REVIEW', payload: json})
    }

  // const handleEdit = async (reviewId, module, grade, yearTaken, description, review) => {
  //   const response = await fetch(`/api/review/${reviewId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${user.token}`
  //     },
  //     body: JSON.stringify({
  //       module,
  //       grade,
  //       yearTaken,
  //       description,
  //       review,
  //     }),
  //   });
  //   }
  }
  return (
    <div className={showForm ? "container greyedout" : "container"}>
      <div className="side-container">
        <Side></Side>
      </div>

      <div className="portfolio-main-container">
        {error && <div>{error}</div>}
        {isPending && <div className="port-loading"></div>}
        {portfolio && <PortfolioList portfolio={portfolio} onDelete={handleDelete} />}
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
