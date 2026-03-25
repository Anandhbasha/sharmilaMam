import React, { useContext } from 'react'
import { PassingValue } from '../App'

const Card = ({prodName,prodPrice,prodDesc,Image}) => {
  const {setCount} = useContext(PassingValue)
  const addCount = ()=>{
    setCount((prev)=>++prev)
  }
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={Image}></img>
        </div>
        <div className='cardBtm'>
            <h2>{prodName}</h2>
            <h2>{prodPrice}</h2>
            <h2>{prodDesc}</h2>
            <button onClick={addCount}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Card