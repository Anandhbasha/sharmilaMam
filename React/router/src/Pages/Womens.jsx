import React, { useContext } from 'react'
import Card from '../Components/Card'
import { PassingValue } from '../App'

const Womens = () => {
  const {Products} = useContext(PassingValue)
  const WomensProduct = Products.filter((item)=>item.prodCat==="Womens")
  return (
    <div className='Womens'>
        {
          WomensProduct.map((item)=>(
            <Card {...item}/>
          ))
        }
    </div>
  )
}

export default Womens