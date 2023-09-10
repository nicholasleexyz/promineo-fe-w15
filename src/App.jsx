import { useEffect, useRef, useState } from "react";
import Entry from "./Entry";

const endpoint = "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";
const data = await fetch(endpoint).then((response) => response.json());

// useEffect(() => {
//   fetch(
//     `${baseUrl}apikey=${apikey}&i=${movies.Search[currentMovieIndex].imdbID}`
//   )
//     .then((response) => response.json())
//     .then((data) => setCurrentMovieData(data));
// }, [currentMovieIndex]);

function App() {
  const [currentData, setCurrentData] = useState(data);
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState(false);

  const inputUser = useRef(null);
  const inputFullName = useRef(null);
  const inputEmail = useRef(null);

  const f = async () =>
    await fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setCurrentData(data);
        setIsLoaded(false);
      });

  useEffect(() => {
    if (post) {
      const postFunc = async () => {
        const body = JSON.stringify({
          user: inputUser.current.value,
          name: inputFullName.current.value,
          email: inputEmail.current.value,
        });

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
        };

        await fetch(
          "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users/",
          requestOptions
        );

        inputUser.current.value = "";
        inputFullName.current.value = "";
        inputEmail.current.value = "";
      };

      postFunc();
      setPost(false);
      setIsLoaded(true);
    }
  }, [post]);

  useEffect(() => {
    // console.log(currentData);
    f();
  }, [isLoaded]);

  return (
    <div className="content">
      <div className="new-entry-wrapper">
        <div className="new-entry">
          <div className="iput">
            <label className="" htmlFor="">
              User:{" "}
            </label>
            <input className="" type="text" name="" id="" ref={inputUser} />
          </div>
          <div className="iput">
            <label className="" htmlFor="">
              Full Name:{" "}
            </label>
            <input className="" type="text" name="" id="" ref={inputFullName} />
          </div>
          <div className="iput">
            <label className="" htmlFor="">
              Email:{" "}
            </label>
            <input className="" type="text" name="" id="" ref={inputEmail} />
          </div>
          <button onClick={() => setPost(true)} className="btn btn-new">
            New
          </button>
        </div>
      </div>
      <div className="entry-container">
        {currentData.map((d, i) => (
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
