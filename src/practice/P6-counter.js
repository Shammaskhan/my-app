import React, { Component } from 'react'
import './practice.css'
export default class P6 extends Component {
  constructor(){
    super();
    this.state={
        count:1
    }
  }
  increment(){
    this.setState(a=>({
        count:a.count+1
    }))
    console.log(this.state.count)
  }
  /*
  increment1(){
    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)
  }
  increment2(){
    this.state.count=this.state.count+1
    console.log(this.state.count)
  }
  increment3(){
    this.setState({
        count:this.state.count+1
    },()=>{console.log(this.state.count)})
  }
  */
  increment4(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div className='center'>
        <h4>count:{this.state.count}</h4>
        <button onClick={()=>this.increment4()}>Increment</button>
      </div>
    )
  }
}
