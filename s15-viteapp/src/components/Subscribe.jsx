import React, { Component } from 'react'
import Message from './Message'

 class Subscribe extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Please Subscribe"
        }
    }
    changeMessage(){
        this.setState(
            {
            message: "Thank you for Subscribing"
            }
        )
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Subscribe