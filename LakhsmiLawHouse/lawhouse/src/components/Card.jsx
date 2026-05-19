import { useDispatch } from 'react-redux'
import { addtoCart } from '../Slices.js/CartSlice'
import { useNavigate } from 'react-router'

const Card = ({id,Title,Price,Image,Category,description})=>{
   const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleAdd = (e) => {
    e.stopPropagation(); 
    dispatch(addtoCart({ id, Title,Price,Category,Image,description}));
  };
 
 return (
           <div className='Card' 
    onClick={() => navigate(`/product/${id}`)}>
    <div className='cardBtm'>
                <img src={Image}alt={Title}></img>

            </div>
            <div className='cardBtm'>
                <p>{Title}</p>
                <p>{Price}/-</p>
                
                                                                                                                                                                                                                                                                                                              
                 <button onClick={handleAdd}>
                Add To Cart
              </button>
            </div>
      </div>
  )
}
export default Card