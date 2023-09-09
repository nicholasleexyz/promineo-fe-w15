import Entry from "./Entry";

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
