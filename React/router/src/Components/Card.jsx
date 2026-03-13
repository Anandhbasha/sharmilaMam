import React from 'react'
import shirt from "../assets/Images/Shirts.jpg"

const Card = () => {
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={shirt}></img>
        </div>
        <div className='cardBtm'>
            <h2>Product Name</h2>
            <h2>Product Price</h2>
            <h2>Product Desc</h2>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default Card