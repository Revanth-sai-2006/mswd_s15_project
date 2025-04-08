import React from 'react'
import Greetings from './Greetings'

export const {

  return (
    <div>
        <Routes>
            <Route path='/'element=<Greetings/> ></Route>
            <Route path='login' element=<Login/> />
            <Route path='Counter' element=<Counter/> />
        </Routes>
    </div>
  )
}
