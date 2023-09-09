import Entry from "./Entry";

const endpoint =
  "https://64fbc056605a026163ae0736.mockapi.io/promineo-fe-week-15/asdf";

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
    <div className="content-wrapper">
      <div className="content">
        <button className="grid-item">Create</button>
        <button className="grid-item">Read</button>

        <button className="grid-item">Update</button>
        <button className="grid-item">Delete</button>

        {/* 
          new entry button (create)
          load button for testing (read)

          read is implicit
        */}
        <Entry></Entry>
      </div>
    </div>
  );
}

export default App;
