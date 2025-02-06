import React, { Component } from 'react'

export default class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            username:"pranav",
            counter:0
        };
    }
    changeName=()=>{
        this.setState({username:"shankar"})
    }
  render() {
    return (
      <div>CBCStateEx
        {/* <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>button</button> */}
        <h1>{this.state.counter}</h1>
        <button></button>
        <button></button>
        <button></button>
      </div>
    )
  }
}
