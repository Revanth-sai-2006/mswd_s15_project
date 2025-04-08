import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FunState  from './FunState'
import { About } from './About'

export const Home = () => {
  return (
    <div>
        {/*<Routes>
            <Route path='/'element=<FunState/> ></Route>
            <Route path='about' element=<About/> />
        </Routes>*/}
        <h1>Welcome to Home Page!!!</h1>
    </div>
  )
}
export default Home