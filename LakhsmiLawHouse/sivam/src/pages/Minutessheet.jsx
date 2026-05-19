import Card from "../components/Card"
import { useSelector } from "react-redux"

const Minutessheet= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const minutes=Products.filter((item)=>item.Category==="Minutes Sheet")
 return (
    <div className='bg'>
      {minutes.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default Minutessheet