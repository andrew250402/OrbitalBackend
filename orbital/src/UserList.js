import "./UserList.css";
import { useState } from "react";

const UserList = ({ user }) => {
  // Put the search value from search bar over here then it works already
  const [search, setSearch] = useState("CS2040S");
  return (
    <div className="user-list">
      {user
        .filter((user) => user.modulesreviewed.includes(search))

        .map((user) => (
          <div className="user-container" key={user._id}>
            <h2 className="user-name">{user.name}</h2>
            <div className="user-module">{search}: </div>
            {/* how to link to the other database of a partciular students portfolio and show the grade */}
          </div>
        ))}
    </div>
  );
};

export default UserList;
