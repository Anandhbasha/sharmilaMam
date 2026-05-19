import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { useState,useEffect } from 'react'

const ProfessionalBooks= () => {
    const Products = useSelector((state)=>state.Product.Products)
    const [visibleCount, setVisibleCount] = useState(0);
      useEffect(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= ProfessionalBooks.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    
      return () => clearInterval(interval);
    }, [ProfessionalBooks]);
    
    const Digi=Products.filter((item)=>item.Category==="Professional Books")
 return (
    <div className='ProfessionalBooks'style={{paddingTop:"80px"}}>
      {Digi.map((item)=>
              <Card key={item.id}{...item}/>
        
        )}
        <div className="ProfessionalBooks">
            {Products.slice(0, visibleCount).map((item) => (
           <Card key={item.id} {...item} />
        ))}
              </div>
          
<div>
          
        </div>

       
    </div>
  )
}

export default ProfessionalBooks