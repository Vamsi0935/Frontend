import React, { Component } from "react";

export default class StateExample extends Component {
  state = {
    name: "ReactJs",
    year: 2015,
    employees: [
      { name: "Vamsi Krishna", age: "23" },
      { name: "Srinidhi" },
      { name: "Maneesha" },
      { name: "Vineeth" },
      { name: "Bhasker" },
    ],
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Name is :{this.state.name}</h1>
        {
        this.state.employees.map((emp) => (
          <div>
            <p>{emp.name}</p>
            <p>{emp.age}</p>
          </div>
        ))
        }
      </div>
    );
  }
}
