import Entry from "./Entry";
import PropTypes from "prop-types";

export default function ContentEntries({ userData }) {
  if (!userData) {
    return <span>LOADING...</span>;
  }

  return (
    <div className="content-entries">
      {userData.map((elem) => {
        return (
          <Entry key={elem.id} user={elem.user} avatar={elem.avatar}></Entry>
        );
      })}
    </div>
  );
}

ContentEntries.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object),
};
