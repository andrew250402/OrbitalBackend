//import { useSideInfo } from '../hooks/useSideInfo'
import { useOtherSideInfo } from '../hooks/useSideInfo'
import "./Side.css";
import { useParams } from "react-router-dom"

const Side = () => {
  const { userId } = useParams();
  const {
    info: user,
    isPending,
    error,
  } = useOtherSideInfo(userId);

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
