import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Entry({ user, email, fullName, imgAvatar, index }) {
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idx, setIndex] = useState(index);

  const [currentUser, setCurrentUser] = useState(user);
  const [currentEmail, setCurrentEmail] = useState(email);
  const [currentFullName, setCurrentFullName] = useState(fullName);

  useEffect(() => {
    if (del === true) {
      console.log("deleting at index: " + idx);
      fetch(
        "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users/" + idx,
        {
          method: "DELETE",
        }
      );
    } else if (edit === true) {
      console.log("Editing at index: " + idx);

      setCurrentUser("asdf");
      setCurrentFullName("jkl");
      setCurrentEmail("qwerty");

      console.log(currentUser);
      const body = JSON.stringify({
        user: currentUser,
        name: currentFullName,
        email: currentEmail,
      });

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body,
      };

      const updateData = async () => {
        await fetch(
          "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users/" + idx,
          requestOptions
        )
          .then((res) => res.json())
          .then((dat) => setIndex(dat.id));

        setEdit(false);
      };

      updateData();
    }
  }, [del, edit, idx, currentEmail, currentFullName, currentUser]);

  return (
    <div className={`entry ${del ? "hidden" : ""}`}>
      <img src={imgAvatar}></img>
      <span>User: {currentUser}</span>
      <span>Full Name: {currentFullName}</span>
      <span>Email: {currentEmail}</span>

      <button className="btn-edit" onClick={() => setEdit(true)}>
        Edit
      </button>
      <button className="btn-delete" onClick={() => setDel(true)}>
        Delete
      </button>
      {/* 
        edit button (update)
        delete button (╯°□°）╯︵ ┻━┻
       */}
    </div>
  );
}

// :P
Entry.propTypes = {
  user: PropTypes.string,
  email: PropTypes.string,
  fullName: PropTypes.string,
  imgAvatar: PropTypes.string,
  index: PropTypes.string,
};

export default Entry;
