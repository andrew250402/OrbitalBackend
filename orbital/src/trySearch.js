import React, { useState } from "react";
import SearchBar from "./Navbar/Searchbar";
import UserList from "./UserListing";
import {useSearch} from "./hooks/useSearch";


const ParentComponent = () => {
  const [searchResults, setSearchResults] = useState([]);
  const {search, isLoading, error} = useSearch();

  const onSearch = async (searchTerm) => {
    if (error){
        console.log(error)
        console.log(isLoading)
    }
    const users = await search(searchTerm);
    console.log(users)
    setSearchResults(users);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <UserList userArray={searchResults} />
    </div>
  );
};

export default ParentComponent;
