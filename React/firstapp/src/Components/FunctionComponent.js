import React from "react";

export default function Greet(props) {
  console.log(props);
  return (
    <div className="details">
      <p>{props.name}</p>
      <p>{props.gender}</p>
      <p>{props.age}</p>
    </div>
  );
}

//ES6 Concept
// const Greet=(props)=>
// <div>
//     <h1>{props.name}</h1>
// </div>
// export default Greet
