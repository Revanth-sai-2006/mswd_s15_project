import React, { useState } from 'react'
import Button from '@mui/material/Button';

const FunState = () => {
    const [count,setCount] = useState(0);
    function incrementCount(){
             setCount(
                count+1
             )
    }
    function decrementCount(){
        setCount(
           count-1
        )
    }
  return (
    <div>
        <h1>Welcome to arrow functions</h1>
        <h1>Count: {count}</h1>
        {/* <button onClick={()=>incrementCount()}>Increment</button> */}
        <Button variant="contained" onClick={()=>incrementCount()}>Increment</Button>
        {/* <br></br> */}&nbsp;
        {/* <button onClick={()=>decrementCount()}>Decrement</button> */}
        <Button variant="outlined" onClick={()=>decrementCount()}>Decrement</Button>
        {/* <Button variant="contained">Contained</Button> */}
    </div>
  )
}

export default FunState