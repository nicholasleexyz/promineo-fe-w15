import PropTypes from "prop-types";

function Entry({ imgSrc, userName, userID }) {
  return (
    <div className="entry">
      <img src={imgSrc}></img>
      <div>
        <span>{userName}</span>
      </div>
      <span>ID: {userID}</span>

      <button className="btn">Edit</button>
      <button className="btn">Delete</button>
      {/* 
        edit button (update)
        delete button (╯°□°）╯︵ ┻━┻
       */}
    </div>
  );
}

Entry.propTypes = {
  imgSrc: PropTypes.string,
  userName: PropTypes.string,
  userID: PropTypes.number,
};

export default Entry;
