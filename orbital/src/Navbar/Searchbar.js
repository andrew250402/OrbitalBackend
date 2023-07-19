import { useState } from "react";
import "./Searchbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import ParentComponent from '../trySearch';

const SearchBar = ( {onSearch} ) => {
  console.log(typeof(onSearch))
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    onSearch(searchTerm);
    history.push("/searchResult");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <FaMagnifyingGlass className="magnifying-glass" />
      </button>
    </form>
  );
};

export default SearchBar;
