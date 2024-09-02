import React, { Component } from "react";

export default class StateExample extends Component {
  state = {
    name: "ReactJs",
    year: 2018,
    employees: [
      { name: "Vamsi Krishna", gender: "Male" },
      { name: "Srinidhi", gender: "Female" },
      { name: "Maneesha", gender: "Female" },
      { name: "Vineeth", gender: "Male" },
      { name: "Pradeep", gender: "Male" },
    ],
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        {this.state.employees.map((emp) => (
          <div>
            <p>Name: {emp.name}</p>
            <p>Gender: {emp.gender}</p>
          </div>
        ))}
      </div>
    );
  }
}
