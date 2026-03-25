import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import "./App.css"
import MCas from "./assets/Images/Cas.Webp"
import TshirtM from "./assets/Images/Tshirt.jpg"
import MFor from "./assets/Images/formal.jpg"
import WTop from "./assets/Images/tops.jpg"
import Wlegg from "./assets/Images/leggin.jpg"
import Wshirt from "./assets/Images/formalwomen.jpg"
import kid1 from "./assets/Images/kids1.jpg"
import kid2 from "./assets/Images/frogKids.jpg"
import kid3 from "./assets/Images/tho.jpg"

export const PassingValue = createContext()
const App = () => {
  const [count,setCount] = useState(0)
  const Products = [
    {
      prodCat:"Mens",
      prodName:"Casual Shirt",
      prodPrice:500,
      prodDesc:"Casula shirt is good shirt",
      Image:MCas
    },
    {
      prodCat:"Mens",
      prodName:"Formal Shirt",
      prodPrice:400,
      prodDesc:"CasFormal shirt is good shirt",
      Image:MFor
    },
    {
      prodCat:"Mens",
      prodName:"Casual TShirt",
      prodPrice:300,
      prodDesc:"Casual TShirt is good shirt",
       Image:TshirtM
    },
    {
      prodCat:"Womens",
      prodName:"Formal Shirt",
      prodPrice:600,
      prodDesc:"Formal shirt is good shirt",
      Image:Wshirt
    },
    {
      prodCat:"Womens",
      prodName:"Tops",
      prodPrice:200,
      prodDesc:"Tops is good shirt",
      Image:WTop
    },
    {
      prodCat:"Womens",
      prodName:"Leggins",
      prodPrice:150,
      prodDesc:"Leggin is good shirt",
      Image:Wlegg
    },
    {
      prodCat:"Kids",
      prodName:"Dhoththi",
      prodPrice:200,
      prodDesc:"Dhoththi shirt is good shirt",
      Image:kid1
    },
    {
      prodCat:"Kids",
      prodName:"Frogs",
      prodPrice:200,
      prodDesc:"Frogs is good shirt",
      Image:kid2
    },
    {
      prodCat:"Kids",
      prodName:"Set T Shirts",
      prodPrice:150,
      prodDesc:"Set T Shirts is good shirt",
      Image:kid3
    },

  ]
  return (
    <BrowserRouter>
      <PassingValue.Provider value={{Products,count,setCount}}>
        <div className='App'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<AllProducts/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>}/>
          <Route path='/kids' element={<Kids/>}/>
        </Routes>
      </PassingValue.Provider>
    </BrowserRouter>
  )
}

export default App