import "./PortfolioList.css";

const PortfolioList = ({ portfolio }) => {
  return (
    <div className="portfolio-list">
      {portfolio.map((review) => (
        <div className="review-container" key={review.id}>
          <h2 className="name">{review.module}</h2>
          <h2 className="grade">Grade: {review.grade}</h2>
          <div className="yeartaken">Year taken: {review.yeartaken}</div>
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
