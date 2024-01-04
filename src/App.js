import React from 'react';
import Cart from './components/Cart';
import Basket from './components/Basket';
import style from './style.css';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Cart/>} />
        <Route path='/basket' element={<Basket/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App