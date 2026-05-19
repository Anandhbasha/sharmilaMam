import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Etds = () => {
  const Products = useSelector((state)=>state.Product.Products)
    const etds=Products.filter((item)=>item.Category==="Etds software")
  return (
    <div >
        <div style={{fontFamily:"emoji",color:"white", paddingTop:"50px",textAlign:"center"}} >
          
    <div style={{display:"flex",flexWrap:"wrap",color:"white"}}>
      
      {etds.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

               </div>

               

</div>
        </div>
        
  )
}

export default Etds