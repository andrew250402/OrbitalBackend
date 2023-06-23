import { useState } from "react";
import "./Searchbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
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
