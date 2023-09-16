import { useEffect, useState } from "react";
import ContentInfo from "./ContentInfo";
import ContentEntries from "./ContentEntries";
import { userDataContext, currentUserIndexContext } from "./Contexts";

export default function App() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [userData, setUserData] = useState([]);

  async function readUserData() {
    const endpoint =
      "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";

    const userDat = await fetch(endpoint)
      .then((res) => res.json())
      .then((dat) => dat);

    setUserData(userDat);
  }

  useEffect(() => {
    readUserData();
    return () => {};
  }, []);

  return (
    <userDataContext.Provider value={[userData, setUserData]}>
      <currentUserIndexContext.Provider
        value={[currentUserIndex, setCurrentUserIndex]}
      >
        <div className="content">
          <ContentInfo></ContentInfo>
          <ContentEntries></ContentEntries>
        </div>
      </currentUserIndexContext.Provider>
    </userDataContext.Provider>
  );
}
