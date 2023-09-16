import PropTypes from "prop-types";

export default function ContentInfo({ user }) {
  if (!user) {
    return (
      <div className="content-info">
        <span>no info.</span>
      </div>
    );
  }

  return (
    <div className="content-info">
      <img src={user.avatar} alt="" />
      <p>User: {user.user}</p>
      <p>Name: {user.name}</p>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

ContentInfo.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }),
};
