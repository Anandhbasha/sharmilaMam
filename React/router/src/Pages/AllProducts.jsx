import React, { useContext } from 'react'
import Card from '../Components/Card'
import { PassingValue } from '../App'

const AllProducts = () => {
  const {Products} = useContext(PassingValue)
  return (
    <div className='AllProducts'>
        {Products.map((item)=>(
          <Card {...item}/>
        ))}
    </div>
  )
}

export default AllProducts