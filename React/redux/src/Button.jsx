import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice'

const Button = () => {
  const values = useSelector((state)=>state.add.count)
  const dispatch = useDispatch()
  return (
    <div className='Button'>
      <p>{values}</p>
      <button onClick={()=>dispatch(increment(1))}>Increment</button>
      <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Button