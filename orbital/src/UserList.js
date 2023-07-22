import "./UserList.css";
import { Link } from "react-router-dom";
import { useSearchContext } from "./hooks/useSearchContext";

const UserList = () => {
  const { searchedNames } = useSearchContext();

  if (!searchedNames) {
    return null;
  }

  return (
    <div className="user-list">
      {searchedNames.map((searchedName) => (
        <Link key={searchedName._id} to={`/portfolio/${searchedName._id}`}>
          <div className="user-container">
            <div className="details">
              <h2 className="user-name">{searchedName.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserList;
