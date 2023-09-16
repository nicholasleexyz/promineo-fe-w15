import Entry from "./Entry";
import PropTypes from "prop-types";

export default function ContentEntries({
  userData,
  setIndexUserCurrent,
  indexUserCurrent,
}) {
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
            clickCallback={() => setIndexUserCurrent(i)}
            indexUserCurrent={indexUserCurrent}
            index={i}
            className={i == indexUserCurrent ? "entry-current" : ""}
          ></Entry>
        );
      })}
    </div>
  );
}

ContentEntries.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object),
  setIndexUserCurrent: PropTypes.func,
  indexUserCurrent: PropTypes.number,
};
