import { useSideInfo } from '../hooks/useSideInfo'
import "./Side.css";

const Side = () => {
  // Change this. Data should be pulled based off email n pw entered from login page. Not hardcoding a 1 at the back in my useFetch  
  const {
    info: user,
    isPending,
    error,
  } = useSideInfo();

  return (
    <div className="user-details">
      {isPending && <div className="loading"></div>}
      {error && <div>{error}</div>}
      {user && (
        <article>
          <h2 className="profile-pic">
            {/* based off the data  */}
            <img
              src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg"
              alt=""
            />
          </h2>
          <p className="profile-name">Name: {user.name}</p>
          <p className="year">Year: {user.semester}</p>

          <p className="modules">
            Modules currently taking:{" "}
            {user.currentModules.map((module) => (
              <p>{module} </p>
            ))}
          </p>
        </article>
      )}
    </div>
  );
};

export default Side;
