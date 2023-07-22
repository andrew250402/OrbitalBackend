import "./PortfolioList.css";
import { useAuthContext } from './hooks/useAuthContext';

const PortfolioList = ({ portfolio, onDelete }) => {
  const { user } = useAuthContext();
  const user_id = user.token

  const handleDeleteClick = async (reviewId) => {
    await onDelete(reviewId);
  };

  return (
    <div className="portfolio-list">
      {portfolio.map((review) => (
        <div className="review-container" key={review._id}>
          <h2 className="name">{review.module}</h2>
          <h2 className="grade">Grade: {review.grade}</h2>

          {review.user === user_id &&
            <button 
            className="red-x-button"
            onClick={() => handleDeleteClick(review._id)}
            >X</button>}
          <div className="yeartaken">Year taken: {review.yearTaken}</div>
          <div className="review-description">
            Description : {review.description}
          </div>

          <div className="review">Review: {review.review}</div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
