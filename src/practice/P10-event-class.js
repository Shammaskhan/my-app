import React, { Component } from 'react'

export default class P10 extends Component {
  
 
  handleClickEvent(){
    console.log("button is clicked")
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.handleClickEvent()}>click this button arrow</button>
        <button onClick={this.handleClickEvent}>click this button</button>
      </div>
    )
  }
}
