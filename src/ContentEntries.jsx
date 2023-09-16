import Entry from "./Entry";
import { useContext } from "react";
import { userDataContext } from "./Contexts";

export default function ContentEntries() {
  const [userData, setUserData] = useContext(userDataContext);

  async function createNewUserData(newData) {
    const endpoint =
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    };

    await fetch(endpoint, requestOptions).then((res) => res.json());

    const read = await fetch(
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users"
    ).then((res) => res.json());

    setUserData(read);
  }

  if (!userData || userData.length == 0) {
    return <span>LOADING...</span>;
  }

  return (
    <div className="content-entries">
      {userData.map((elem, i) => {
        return <Entry key={elem.id} index={i}></Entry>;
      })}
      <button
        onClick={() =>
          createNewUserData({
            user: "user",
            name: "name",
            email: "email@asdf.com",
          })
        }
      >
        New User
      </button>
    </div>
  );
}
