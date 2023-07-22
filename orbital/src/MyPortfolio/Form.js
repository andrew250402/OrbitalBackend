import { useState } from "react";
import "./Form.css";
import { useNewReview } from '../hooks/useNewReview'

const Form = ({ showForm, handleClick }) => {
  const [module, setModule] = useState("");
  const [grade, setGrade] = useState("A+");
  const [yearTaken, setyearTaken] = useState("Y1S1");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");
  const {newReview, isLoading, error} = useNewReview()

  const handlePost = async (e) => {
    e.preventDefault();

    if (error) {
      console.log(error);
      console.log(isLoading);
    }
    await newReview(module, grade, yearTaken, description, review);

    handleClick(e)
  };


  return (
    <div>
      {showForm && (
        <form className="portfolio-form">
          <button onClick={handleClick} className="red-cross-button">
            X
          </button>

          <div className="name-div">
            <label className="label">Module:</label>
            <input 
            className="input" 
            type="text" 
            onChange = {(e) => setModule(e.target.value)} 
            />
          </div>

          <div 
          className="selects"
          >
            <div className="grade-div">
              <label className="label">Grade: </label>
              <select name="grade-select" id="" onChange ={(e) => setGrade(e.target.value)} value={grade}>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C-">C-</option>
              </select>
            </div>

            <div 
            className="year-div"
            >
              <label className="label">Year Taken: </label>
              <select onChange ={(e) => setyearTaken(e.target.value)} value={yearTaken}>
                <option value="Y1S1">Y1S1</option>
                <option value="Y1S2">Y1S2</option>
                <option value="Y2S1">Y2S1</option>
                <option value="Y2S2">Y2S2</option>
                <option value="Y3S1">Y3S1</option>
                <option value="Y3S2">Y3S2</option>
                <option value="Y4S1">Y4S1</option>
                <option value="Y4S2">Y4S2</option>
              </select>
            </div>
          </div>

          <div 
            className="descrip-div" 
            onChange={(e) => setDescription(e.target.value)}
          >
            <label className="label">Description: </label>
            <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div 
            className="review-div"
            onChange={(e) => setReview(e.target.value)}
          >
            <label className="label">Review: </label>
            <textarea onChange={(e) => setReview(e.target.value)}></textarea>
          </div>

          <button onClick={handlePost} className="add-review-button">
            Add Review
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
