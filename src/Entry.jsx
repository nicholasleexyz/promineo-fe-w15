import PropTypes from "prop-types";
import { useContext } from "react";
import { userDataContext, currentUserIndexContext } from "./Contexts";

export default function Entry({ index }) {
  const [currentUserIndex, setCurrentUserIndex] = useContext(
    currentUserIndexContext
  );
  const [userData] = useContext(userDataContext);

  const user = userData[index];

  return (
    <div
      className={(index == currentUserIndex ? "entry-current " : "") + "entry"}
      onClick={() => setCurrentUserIndex(index)}
    >
      <img src={user.avatar}></img>
      <span>{user.user}</span>
    </div>
  );
}

Entry.propTypes = {
  index: PropTypes.number,
};
