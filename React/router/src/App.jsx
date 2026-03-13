import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
        <div className='App'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<AllProducts/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>}/>
          <Route path='/kids' element={<Kids/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App