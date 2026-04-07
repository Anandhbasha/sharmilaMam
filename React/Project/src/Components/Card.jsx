import { useDispatch } from 'react-redux'
import { addtoCart } from '../Slices/CartSlice'

const Card = ({prodName,prodPrice,prodDesc,Image,...item}) => {
  const dispatch = useDispatch()
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={Image}></img>
        </div>
        <div className='cardBtm'>
            <h2>{prodName}</h2>
            <h2>{prodPrice}</h2>
            <h2>{prodDesc}</h2>
            <button onClick={()=>{dispatch(addtoCart(item))}}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Card