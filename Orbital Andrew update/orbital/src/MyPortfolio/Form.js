import "./Form.css";

const Form = ({ showForm, handleClick }) => {
  const handlePost = (e) => {
    e.preventDefault();
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
            <input className="input" type="text" />
          </div>

          <div className="selects">
            <div className="grade-div">
              <label className="label">Grade: </label>
              <select name="grade-select" id="">
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

            <div className="year-div">
              <label className="label">Year Taken: </label>
              <select>
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

          <div className="descrip-div">
            <label className="label">Description: </label>
            <textarea></textarea>
          </div>

          <div className="review-div">
            <label className="label">Reivew: </label>
            <textarea></textarea>
          </div>

          <button onSubmit={handlePost} className="add-review-button">
            Add Review
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
