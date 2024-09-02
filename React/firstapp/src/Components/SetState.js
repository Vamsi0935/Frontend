// import React, { Component } from "react";

// export default class SetState extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       greeting: "Good Evening!!!",
//     };
//     this.updateState = this.updateState.bind(this);
//   }
//   updateState() {
//     this.setState({
//       greeting: "Good Night!!",
//     });
//   }

//   render() {
//     return (
//       <div className="details">
//         <h1>Vamsi Krishna Dudyala</h1>
//         <p>{this.state.greeting}</p>
//         <button onClick={this.updateState}>Change</button>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  updateIncrement() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   });
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  updateIncrementFive() {
    this.updateIncrement();
    this.updateIncrement();
    this.updateIncrement();
    this.updateIncrement();
  }

  render() {
    return (
      <div className="details">
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.updateIncrementFive()}>Increment</button>
      </div>
    );
  }
}
