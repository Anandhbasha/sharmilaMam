import Card from "../components/Card"
import { useSelector } from "react-redux"

const Xbrl= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const sensys=Products.filter((item)=>item.Category==="Xbrl software")
 return (
    <div className='bg3'>
      {sensys.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Xbrl