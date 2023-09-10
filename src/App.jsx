import Entry from "./Entry";

const endpoint = "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";
const data = await fetch(endpoint).then((response) => response.json());
console.log(data);

// useEffect(() => {
//   fetch(
//     `${baseUrl}apikey=${apikey}&i=${movies.Search[currentMovieIndex].imdbID}`
//   )
//     .then((response) => response.json())
//     .then((data) => setCurrentMovieData(data));
// }, [currentMovieIndex]);

function App() {
  return (
    <div className="content">
      <div className="new-entry-wrapper">
        <div className="new-entry">
          <div className="iput">
            <label className="" htmlFor="">
              User:{" "}
            </label>
            <input className="" type="text" name="" id="" />
          </div>
          <div className="iput">
            <label className="" htmlFor="">
              Full Name:{" "}
            </label>
            <input className="" type="text" name="" id="" />
          </div>
          <div className="iput">
            <label className="" htmlFor="">
              Email:{" "}
            </label>
            <input className="" type="text" name="" id="" />
          </div>
          <button className="btn btn-new">New</button>
        </div>
      </div>
      <div className="entry-container">
        {data.map((d, i) => (
          <Entry
            key={i}
            user={d.user}
            email={d.email}
            fullName={d.name}
            imgAvatar={d.avatar}
            index={d.id}
          ></Entry>
        ))}
      </div>
    </div>
  );
}

export default App;
