import { useSelector } from "react-redux"
import { Link } from "react-router"

const Navbar = () => {
  const cartItem = useSelector((state)=>state.Cart.cartItem)
  return (
    <div className='Navbar'>
        <Link to='/'>AllProducts</Link>
        <Link to='/mens'>Mens</Link>
        <Link to='/womens'>Womens</Link>
        <Link to='/kids'>Kids</Link>
        <h2>{cartItem.length}</h2>
    </div>
  )
}

export default Navbar