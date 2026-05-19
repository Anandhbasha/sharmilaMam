import Card from "../components/Card"
import { useSelector } from "react-redux"

const Commonseal= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const Seal=Products.filter((item)=>item.Category==="Commonseal")
 return (
    <div className='bg5'>
      {Seal.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Commonseal