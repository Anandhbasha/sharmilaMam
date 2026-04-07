import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'
import "./App.css"
import Navbar from './Components/Navbar'
import AllProducts from './Pages/AllProducts'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<ProtectedRoute><AllProducts/></ProtectedRoute>}/>
        <Route path='/mens' element={<ProtectedRoute><Mens/></ProtectedRoute>}/>
        <Route path='/womens' element={<ProtectedRoute><Womens/></ProtectedRoute>}/>
        <Route path='/kids' element={<ProtectedRoute><Kids/> </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App