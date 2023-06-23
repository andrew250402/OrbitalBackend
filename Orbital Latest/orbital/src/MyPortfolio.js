import Side from "./Home/Side";
import useFetch from "./useFetch";
import "./MyPortfolio.css";
import PortfolioList from "./PortfolioList";

// Brief Overview of Porfolio Details page. Clicking My Portfolio will send them to their specific own portfolio with their own database.

//For side to work (See Side.js Comments )
//For the other portion to work, each user in db.json must be linked to their own database (portfolio.json) with their personal mod reviews and programmes. Please do the necessary linkage so from the id in db.json , we can go to the correct portfolio.json data  base and pull out their personal reviews.
const MyPortfolio = () => {
  const {
    data: portfolio,
    isPending,
    error,
  } = useFetch("http://localhost:8001/portfolio");
  return (
    <div className="container">
      <div className="side-container">
        <Side></Side>
      </div>

      <div className="portfolio-main-container">
        {error && <div>{error}</div>}
        {isPending && <div className="port-loading"></div>}
        {portfolio && <PortfolioList portfolio={portfolio} />}
      </div>
    </div>
  );
};

export default MyPortfolio;
