import { userDataContext, currentUserIndexContext } from "./Contexts";
import { useContext, useEffect, useRef } from "react";

export default function ContentInfo() {
  const [currentUserIndex] = useContext(currentUserIndexContext);
  const [userData, setUserData] = useContext(userDataContext);

  const user = userData[currentUserIndex];

  const userInputRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();

  useEffect(() => {
    if (user) {
      userInputRef.current.value = user.user;
      emailInputRef.current.value = user.email;
      nameInputRef.current.value = user.name;
    }
  }, [user]);

  async function del() {
    const endpoint =
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users" +
      "/" +
      user.id;

    await fetch(endpoint, { method: "DELETE" });
    const read = await fetch(
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users"
    )
      .then((res) => res.json())
      .then((dat) => dat);

    setUserData(read);
  }

  async function editUserData(newData) {
    const endpoint =
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users" +
      "/" +
      user.id;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    };

    await fetch(endpoint, requestOptions);
    // .then((res) => res.json());

    const read = await fetch(
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users"
    ).then((res) => res.json());

    setUserData(read);
  }

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
          <input
            type="text"
            name="user"
            id=""
            ref={userInputRef}
            defaultValue={user.user}
          />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id=""
            ref={nameInputRef}
            defaultValue={user.name}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id=""
            ref={emailInputRef}
            defaultValue={user.email}
          />
          <button onClick={() => del(currentUserIndex)}>Delete</button>
          <button
            onClick={() => {
              editUserData({
                user: userInputRef.current.value,
                email: emailInputRef.current.value,
                name: nameInputRef.current.value,
              });
            }}
          >
            Update Info
          </button>
        </div>
      </div>
    </div>
  );
}
