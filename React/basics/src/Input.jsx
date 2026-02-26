import React from 'react'

const Input = (props) => {
  return (
    <div className='Input'>
        <input type={props.type} placeholder={props.placeholder}></input>
    </div>
  )
}

export default Input