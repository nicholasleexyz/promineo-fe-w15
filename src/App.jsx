import { useEffect, useState } from "react";
import ContentInfo from "./ContentInfo";
import ContentEntries from "./ContentEntries";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [indexUserCurrent, setIndexUserCurrent] = useState(0);

  //READ
  async function getUserData() {
    const endpoint =
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";

    const userDat = await fetch(endpoint)
      .then((res) => res.json())
      .then((dat) => dat);

    setUserData(userDat);
  }

  //DELETE
  //EDIT (PUT)
  //CREATE (POST)

  useEffect(() => {
    getUserData();
    return () => {};
  }, []);

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  return (
    <div className="content">
      <ContentInfo></ContentInfo>
      <ContentEntries
        userData={userData}
        setIndexUserCurrent={setIndexUserCurrent}
        indexUserCurrent={indexUserCurrent}
      ></ContentEntries>
    </div>
  );
}
