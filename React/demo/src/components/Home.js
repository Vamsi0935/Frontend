import React, { useState } from "react";
export default function Home() {
  let [username, setUsername] = useState("Vamsi Krishna Dudyala");
  const [age, setAge] = useState(23);
  const [name, setName] = useState(" ");
  function submit() {
    alert(name);
    setName("");
  }
  return (
    <div>
      <h1>name:{username}</h1>
      <p>{age}</p>
      <input
        value={name}
        placeholder="Enter name"
        onChange={(v) => setName(v.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
