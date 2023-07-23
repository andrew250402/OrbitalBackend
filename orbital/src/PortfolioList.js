import "./PortfolioList.css";
import { useAuthContext } from "./hooks/useAuthContext";
import React, { useState } from "react";
import EditForm from "./MyPortfolio/EditForm";

const PortfolioList = ({ portfolio, onDelete }) => {
  const { user } = useAuthContext();
  const user_id = user.token;

  const [showForm, setShowForm] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);

  const handleClick = (e, reviewId) => {
    e.preventDefault();
    setShowForm(!showForm);
    setEditingReviewId(reviewId);
  };

  const handleDeleteClick = async (reviewId) => {
    await onDelete(reviewId);
  };

  return (
    <div className="portfolio-list">
      {portfolio.map((review) => (
        <div className="review-container" key={review._id}>
          <h2 className="name">{review.module}</h2>
          <h2 className="grade">Grade: {review.grade}</h2>
          {review.user === user_id && (
          <button 
            className="edit-button"
            onClick={(e) => handleClick(e, review._id)}
          >
            Edit
          </button>
          )}

          {review.user === user_id && (
            <button
              className="red-x-button"
              onClick={() => handleDeleteClick(review._id)}
            >
              X
            </button>
          )}
          <div className="yeartaken">Year taken: {review.yearTaken}</div>
          <div className="review-description">
            Description : {review.description}
          </div>

          <div className="review">Review: {review.review}</div>
          {showForm && editingReviewId === review._id && (
            <EditForm
              showForm={showForm}
              handleClick={handleClick}
              curReview={review}
              className={showForm ? "form notgreyedout" : "form"}
            ></EditForm>
          )}
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
