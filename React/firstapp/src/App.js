import React, { Component } from "react";
import "./App.css";
// import ClassComponent from "./Components/ClassComponent";
// import FunctionComponent from "./Components/FunctionComponent"
// import StateComponent from "./Components/StateComponent";
// import SetState from "./Components/SetState";
// import FunctionClick from "./Components/FunctionClick";
import EventBind from "./Components/EventBind";

export default class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div className="parent">
        <EventBind />
        {/* <FunctionClick /> */}
        {/* <SetState /> */}
        {/* <StateComponent /> */}
        {/* <FunctionComponent name="Vamsi Krishna Dudyala" gender="Male" age="23"/>
        <FunctionComponent name="Srinidhi Sriramula" gender="Female" age="23"/>
        <FunctionComponent name="Maneesha Gouraram" gender="Female" age="22"/>
        <FunctionComponent name="Vineeth Kuntala" gender="Male" age="22"/>
        <FunctionComponent name="Bhasker Pradeep" gender="Male" age="22"/>
        <FunctionComponent name="Raja Sekhar" gender="Male" age="30"/>
        <FunctionComponent name="Hari Priya" gender="Female" age="28"/>
        <FunctionComponent name="Jaya Krishna" gender="Male" age="28"/>
        <FunctionComponent name="Bhavani" gender="Female" age="23"/> */}
        {/* <ClassComponent name="Vamsi Krishna Dudyala" gender="Male"/>
        <ClassComponent name="Srinidhi Sriramula" gender="Female"/>
        <ClassComponent name="Maneesha Gouraram" gender="Female"/>
        <ClassComponent name="Vineeth Kuntala" gender="Male"/> */}
      </div>
    );
  }
}
