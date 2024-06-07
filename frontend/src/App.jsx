/**  Author :Malsha Ekanayake
 * */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div className='app'>
<Navbar/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/' element={<Cart/>}/>
  <Route path='/' element={<PlaceOrder/>}/>
</Routes>
    </div>
  )
}

export default App