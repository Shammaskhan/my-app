import React, { Component } from 'react'

export default class P5 extends Component {
  constructor(){
    super();
    this.state={
        message:"welcome visitor",
        subs:"subscribe"
    }
  }
  generate(){
    this.setState({
        message:"thanks for subcribing",
        subs:"subscribed!"
    })
  }
  render() {
    return (
      <div className='center'> 
        <h2>State: </h2>
        <h3>{this.state.message}-:</h3>
        <button onClick={()=>this.generate()}>{this.state.subs}</button>
      </div>
    )
  }
}
