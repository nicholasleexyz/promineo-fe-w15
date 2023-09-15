import Entry from "./Entry";
// import { useEffect, useRef, useState } from "react";

// const endpoint = "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";
// const data = await fetch(endpoint).then((response) => response.json());

export default function App() {
  return (
    <div className="content">
      <div className="content-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          dolorum laboriosam, rerum saepe aliquid sit nihil. Sit assumenda quos
          eum eaque! Vel distinctio quidem, officiis fuga optio ea eaque omnis!
        </p>
        <span>Lorem, ipsum dolor.</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          provident tempore eveniet dolor reprehenderit harum officia ducimus
          unde, aut non recusandae ad. Repudiandae cumque voluptas blanditiis
          excepturi! Autem aspernatur error nulla soluta sapiente adipisci
          consequatur eius corrupti at ut voluptatem vero, facilis enim possimus
          earum asperiores pariatur ipsa a porro! Molestias qui quaerat
          excepturi consequatur nulla eaque, voluptates delectus, corporis
          cumque fugiat tempore perspiciatis reprehenderit incidunt aspernatur
          illo nostrum?
        </p>
      </div>
      <div className="content-entries">
        <Entry></Entry>
        <Entry></Entry>
        <Entry></Entry>
        <Entry></Entry>
        <Entry></Entry>
        <Entry></Entry>
        <Entry></Entry>
        <Entry></Entry>
      </div>
    </div>
  );
}
// const [currentData, setCurrentData] = useState(data);
// const [isLoaded, setIsLoaded] = useState(false);

// const inputUser = useRef(null);
// const inputFullName = useRef(null);
// const inputEmail = useRef(null);

// const controller = new AbortController();

// function post() {
//   const postFunc = async () => {
//     const body = JSON.stringify({
//       user: inputUser.current.value,
//       name: inputFullName.current.value,
//       email: inputEmail.current.value,
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: body,
//       signal: controller.signal,
//     };

//     await fetch(
//       "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users/",
//       requestOptions
//     );

//     inputUser.current.value = "";
//     inputFullName.current.value = "";
//     inputEmail.current.value = "";

//     setIsLoaded(false);
//   };

//   postFunc();

//   return () => {
//     controller.abort();
//   };
// }

// useEffect(() => {
//   const f = async () =>
//     await fetch(endpoint)
//       .then((response) => response.json())
//       .then((data) => {
//         setCurrentData(data);
//         setIsLoaded(true);
//       });

//   f();
// }, [isLoaded]);

// return (
//   <div className="content">
//     <div className="new-entry-wrapper">
//       <div className="new-entry">
//         <div className="iput">
//           <label className="" htmlFor="">
//             User:{" "}
//           </label>
//           <input className="" type="text" name="" id="" ref={inputUser} />
//         </div>
//         <div className="iput">
//           <label className="" htmlFor="">
//             Full Name:{" "}
//           </label>
//           <input className="" type="text" name="" id="" ref={inputFullName} />
//         </div>
//         <div className="iput">
//           <label className="" htmlFor="">
//             Email:{" "}
//           </label>
//           <input className="" type="text" name="" id="" ref={inputEmail} />
//         </div>
//         <button onClick={post} className="btn btn-new">
//           New
//         </button>
//       </div>
//     </div>
//     <div className="entry-container">
//       {currentData.map((d, i) => (
//         <Entry
//           key={i}
//           user={d.user}
//           email={d.email}
//           fullName={d.name}
//           imgAvatar={d.avatar}
//           index={d.id}
//         ></Entry>
//       ))}
//     </div>
//   </div>
// );
