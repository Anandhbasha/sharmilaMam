import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { useState, useEffect } from 'react';

import Banner3 from '../components/Banner3';
import Slider from '../components/Slider';

import { Navigate, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductPage from "../components/ProductPage"



const Home = () => {
  const Products = useSelector((state)=>state.Product.Products)
  const [visibleCount, setVisibleCount] = useState(0);
  const navigate=useNavigate()
  useEffect(() => {
  const interval = setInterval(() => {
    setVisibleCount((prev) => {
      if (prev >= Products.length) {
        clearInterval(interval);
        return prev;
      }
      return prev + 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [Products]);

  return (
    <div className="Home">
       <div>
           <Slider/>
        </div>
        <div>
          <ProductPage/>
        </div>
        
<h1 className='glow'
    style={{
      textAlign: "center",
      fontFamily: "cursive",
      width: "100%",
      marginTop:"50px",
      
    }}
  >
    New Arrivals
  </h1>

  <div className="Books">
    {Products.slice(0, visibleCount).map((item) => (
   <Card key={item.id} {...item} />
))}
       </div>
       <div>
<button onClick={()=>navigate("/ProfessionalBooks")}>view More Books</button>
     
      </div>
      
</div>

  )
}
export default Home;