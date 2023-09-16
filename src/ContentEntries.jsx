import Entry from "./Entry";
import { useContext } from "react";
import { userDataContext, currentUserIndexContext } from "./Contexts";

export default function ContentEntries() {
  const [currentUserIndex] = useContext(currentUserIndexContext);
  const [userData] = useContext(userDataContext);

  if (!userData || userData.length == 0) {
    return <span>LOADING...</span>;
  }

  return (
    <div className="content-entries">
      {userData.map((elem, i) => {
        return (
          <Entry
            key={elem.id}
            user={elem.user}
            avatar={elem.avatar}
            index={i}
            className={i == currentUserIndex ? "entry-current" : ""}
          ></Entry>
        );
      })}
    </div>
  );
}
