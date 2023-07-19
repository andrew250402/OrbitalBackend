import "./UserListing.css";

const UserList = ({ userArray }) => {
  return (
    <div className="user-list">
      {userArray.map((user) => (
        <div className="user-container" key={user._id}>
          {user}
        </div>
      ))}
    </div>
  );
};

export default UserList;
