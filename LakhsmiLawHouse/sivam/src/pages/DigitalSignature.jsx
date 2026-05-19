import { useSelector } from 'react-redux'
import Card from '../components/Card'

const DigitalSignature= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const Dig=Products.filter((item)=>item.Category==="DigitalSignature")
 return (
    <div className='bg4'>
      {Dig.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default DigitalSignature