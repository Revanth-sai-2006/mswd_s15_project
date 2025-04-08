import React, { Component } from 'react'

class Counter extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            count: 0
        }
    }
    increment(){
        this.setState(
            {
                count: this.state.count+1
            }
        )
    }
    decrement(){
        this.setState(
            {
                count: this.state.count-1
            }
        )
        
    }
    divide(){
        this.setState(
            {
                count: this.state.count/2
            }
        )
    }
    null(){
        this.setState(
            {
                count: this.state.count=0/2
            }
        )
    }
   
    
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={()=> this.increment()}>Increment</button>
        <button onClick={()=>this.decrement()}>decrement</button>
        <button onClick={()=>this.divide()}>divide</button>
        <button onClick={()=>this.null()}>Null</button>
      </div>
    )
  }
}

export default Counter