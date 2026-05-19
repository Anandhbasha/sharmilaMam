import { useSelector } from 'react-redux'
import Card from '../components/Card'

const DigitalSignature= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const Dig=Products.filter((item)=>item.Category==="Digital Signature")
 return (
    <div className='DigitalSignature'>
      {Dig.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default DigitalSignature