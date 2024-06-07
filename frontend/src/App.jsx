/**  Author :Malsha Ekanayake
 * */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import PlaceOrder from './views/PlaceOrder/PlaceOrder'
import Cart from './views/Cart/Cart'

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