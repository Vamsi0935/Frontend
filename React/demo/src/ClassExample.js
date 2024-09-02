import React from "react";

class ClassExample extends React.Component {
  render() {
    console.log("props information is:", this.props, this.props.age);
    return (
      <div className="students">
        <h1>
          <b>{this.props.name}</b>
        </h1>
        <p>{this.props.age}</p>
        <p>{this.props.degree}</p>
      </div>
    );
  }
}
export default ClassExample;
