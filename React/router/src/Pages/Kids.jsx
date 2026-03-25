import React, { useContext } from 'react'
import Card from '../Components/Card'
import { PassingValue } from '../App'

const Kids = () => {
  const {Products} = useContext(PassingValue)
  const kidsProduct = Products.filter((item)=>item.prodCat==="Kids")
  return (
    <div className='Kids'>
        {
          kidsProduct.map((item)=>(
            <Card {...item}/>
          ))
        }
    </div>
  )
}

export default Kids