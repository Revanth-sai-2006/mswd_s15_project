import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'
import NavReducer from './pages/NavReducer.jsx'
import Content from './pages/Content.jsx'
var store=createStore(NavReducer)
var customer = () => createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Content store={store}/>
  </StrictMode>,
)
customer();
store.subscribe(customer)