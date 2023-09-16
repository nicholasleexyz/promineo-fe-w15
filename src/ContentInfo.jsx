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
      <div className="content-info-edit-wrapper">
        <img src={user.avatar} alt="" />
        <p>User - {user.user}</p>
        <p>Name - {user.name}</p>
        <p>ID - {user.id}</p>
        <p>Email - {user.email}</p>

        <div className="content-info-edit">
          <label htmlFor="user">User: </label>
          <input type="text" name="user" id="" />
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="" />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="" />
          <button>Submit</button>
        </div>
      </div>
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
