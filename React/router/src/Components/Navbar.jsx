import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PassingValue } from '../App'

const Navbar = () => {
  const {count} = useContext(PassingValue)
  return (
    <div className='Navbar'>
        <Link to='/'>AllProducts</Link>
        <Link to='/mens'>Mens</Link>
        <Link to='/womens'>Womens</Link>
        <Link to='/kids'>Kids</Link>
        <div className='cart' style={{display:"flex",position:"relative"}}>
          <i className="fa-solid fa-cart-arrow-down"></i>
          <h2 style={{position:"absolute",left:"25px",top:"-20px",backgroundColor:"red",padding:"5px",borderRadius:"30px"}}>{count}</h2>
        </div>
    </div>
  )
}

export default Navbar