import PropTypes from "prop-types";

export default function Entry({
  user,
  avatar,
  clickCallback,
  indexUserCurrent,
  index,
}) {
  return (
    <div
      className={(index == indexUserCurrent ? "entry-current " : "") + "entry"}
      onClick={() => {
        clickCallback();
        // console.log("asdf");
      }}
    >
      <img src={avatar}></img>
      <span>{user}</span>
    </div>
  );
}

Entry.propTypes = {
  user: PropTypes.string,
  avatar: PropTypes.string,
  clickCallback: PropTypes.func,
  indexUserCurrent: PropTypes.number,
  index: PropTypes.number,
};
