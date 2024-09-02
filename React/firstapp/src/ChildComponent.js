import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='details'>
        <p>Name: {this.props.studentname}</p>
        <p>Degree: {this.props.studentdegree}</p>
        <p>Age: {this.props.studentage}</p>
      </div>
    )
  }
}
