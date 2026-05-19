import Card from "../components/Card"
import { useSelector } from "react-redux"

const Combined= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const reg=Products.filter((item)=>item.Category==="Statutory combined register")
 return (
    <div style={{display:"flex",justifyContent:"center",height:"600",paddingTop:"100px"}}>
      {reg.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Combined