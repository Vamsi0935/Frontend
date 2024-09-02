import React, { Component } from "react";


export default class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vamsi Krishna Dudyala",
      age: 23,
      gender: "Male",
      qualification: "B.Tech",
    };
  }
  changeMessage = (e) => {
    this.setState({
      message: "Thank you for subscribing this channel",
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Name: {this.state.name}</p>
        {/* <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Qualificaion: {this.state.qualification}</p> */}
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}
