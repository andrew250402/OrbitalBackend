import { useState } from "react";
import "./Searchbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearch } from '../hooks/useSearch'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {search, isLoading, error} = useSearch()

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await search(searchTerm);
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
