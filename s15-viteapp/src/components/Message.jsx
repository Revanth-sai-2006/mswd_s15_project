import React, { Component } from 'react'

 class Message extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to class {this.props.name} {this.props.id}</h1>
      </div>
    )
  }
}

export default Message