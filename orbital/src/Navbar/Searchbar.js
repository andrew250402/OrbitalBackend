import { useState, useEffect } from "react";
import "./Searchbar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";

const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const useForceUpdate = () => {
  const [, setState] = useState(0);
  return () => setState((prev) => prev + 1);
};

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useLocalStorageState("searchTerm", "");
  const history = useHistory();
  const { search, error } = useSearch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (error) {
    console.log(error);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await search(searchTerm);
      history.push("/searchResult");
    } catch (error) {
      console.log("Error occurred during search:", error);
    }
  };

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const handleStorageChange = () => {
      forceUpdate();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [forceUpdate]);

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
