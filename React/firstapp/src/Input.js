import axios from "axios";
import React, { Component } from "react";

export default class Input extends Component {
  state = {
    firstname: "",
    username: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    axios
      .post("https://reqres.in/api/users", {
        name: this.state.firstname,
        email: this.state.username,
      })
      .then((res) => {
        console.log(res.data);
      });
    // fetch("https://reqres.in/api/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: this.state.firstname,
    //     email: this.state.username,
    //   }),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((updatedRes) => {
    //     console.log(updatedRes);
    //   });
    this.setState({
      firstname: "",
      username: "",
    });
  };
  render() {
    return (
      <div>
        {/* <h1>
          name is {this.state.firstname}, username is {this.state.username}
        </h1> */}
        <p>
          <input
            value={this.state.firstname}
            name="firstname"
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            value={this.state.username}
            name="username"
            placeholder="Enter username"
            onChange={this.handleChange}
          />
        </p>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
