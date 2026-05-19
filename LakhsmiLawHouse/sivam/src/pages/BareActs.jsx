import { useSelector } from 'react-redux'
import Card from '../components/Card'

const BareActs= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const Digi=Products.filter((item)=>item.Category==="Bare Acts")
 return (
    <div className='BareActs'style={{paddingTop:"80px",display:"flex",background: "linear-gradient(#3e62cfc7, #770ae0)"}}>
      {Digi.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}

       
    </div>
  )
}

export default BareActs