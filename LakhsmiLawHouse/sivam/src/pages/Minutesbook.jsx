import Card from "../components/Card"
import { useSelector } from "react-redux"

const Minutesbook= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const minutes=Products.filter((item)=>item.Category==="Minutes Book")
 return (
    <div style={{display:"flex",justifyContent:"center",height:"600px",paddingTop:"80px"}}>
      {minutes.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Minutesbook