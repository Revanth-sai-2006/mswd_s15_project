import React, { Children } from 'react'

export default function Greetings(props) {
  return (
    <div>
        <h1>Greetings to {props.name} {props.id}</h1> 
    </div>
  )
}
