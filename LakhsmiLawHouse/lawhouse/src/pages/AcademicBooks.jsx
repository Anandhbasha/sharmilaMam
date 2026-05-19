import { useSelector } from 'react-redux'
import Card from '../components/Card'

const AcademicBooks= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const Digi=Products.filter((item)=>item.Category==="Academic Books")
 return (
    <div className='DigitalSignature'>
       {Digi.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default AcademicBooks