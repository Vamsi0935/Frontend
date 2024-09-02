import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div className="details">
        <p>Name: {this.props.name}</p>
        <p>Gender: {this.props.gender}</p>
      </div>
    );
  }
}
