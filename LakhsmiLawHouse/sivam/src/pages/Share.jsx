import React from 'react'
import { useSelector } from 'react-redux'
import Card from "../components/Card"

const Share = () => {
  
const Products = useSelector((state)=>state.Product.Products)
    const Share=Products.filter((item)=>item.Category==="Share Certificate")
 return (
    <div style={{display:"flex",justifyContent:"center",height:"600px",paddingTop:"80px"}}>
      {Share.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
 ) }

export default Share