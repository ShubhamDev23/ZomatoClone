
import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Login from './logsignup/Login'
import Signup from './logsignup/Signup'
import Cart from './components/cart/Cart'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route path='/Login' Component={Login}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/AddToCart' Component={{Cart}}/>
    </Routes>
    </BrowserRouter>
      
      
    
    </>
  )
}

export default App

