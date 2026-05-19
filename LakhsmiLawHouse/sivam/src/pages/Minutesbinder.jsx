import Card from "../components/Card"
import { useSelector } from "react-redux"

const Minutesbinder= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const binder=Products.filter((item)=>item.Category==="Minutes Binder")
 return (
    <div className='bg'>
      {binder.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Minutesbinder