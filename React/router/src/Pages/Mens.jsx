import React, { useContext } from 'react'
import Card from '../Components/Card'
import { PassingValue } from '../App'

const Mens = () => {
  const {Products} = useContext(PassingValue)
  const MensProduct = Products.filter((item)=>item.prodCat==="Mens")
  return (
    <div className='Mens'>
        {
          MensProduct.map((item)=>(
            <Card {...item}/>
          ))
        }
    </div>
  )
}

export default Mens