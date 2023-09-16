import PropTypes from "prop-types";

export default function Entry({ user, avatar }) {
  return (
    <div className="entry">
      <img src={avatar}></img>
      <span>{user}</span>
    </div>
  );
}

Entry.propTypes = {
  user: PropTypes.string,
  avatar: PropTypes.string,
};
