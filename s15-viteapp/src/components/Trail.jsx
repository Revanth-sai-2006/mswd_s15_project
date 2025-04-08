import React, { Component } from 'react'

 class Trail extends Component {
    constructor(props){
        super(props)
        this.state={
            count:100
        }
    }
    multiply(){
        this.setState(
            {
                count: this.state.count*2
            }
        )
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={()=>this.multiply()}>MULTIPLY</button>
      </div>
    )
  }
}

export default Trail