import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Greetings from './components/Greetings'
import Message from './components/Message'
import Login from './components/login'
import Register from './components/Register'
import { Arrowfun } from './components/Arrowfun'
import Subscribe from './components/Subscribe'
import Counter from './components/Counter'
import Trail from './components/Trail'
import Passenger from './components/Passenger'

function App() {  //  stateless component
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/> 
      <Greetings name="revanth" id="31900"/>
      <Message />
      <Login/>
      <Register/>
      <Arrowfun/>
      <Subscribe/>
      <Counter/>
      <Passenger ></Passenger>
   
    </>
  )
}

export default App
