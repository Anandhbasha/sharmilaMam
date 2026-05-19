import { useSelector,useDispatch } from "react-redux";
import { clearCart,toggleCart,increaseQty,decreaseQty,removeFromCart } from "../Slices.js/CartSlice";

const CartSidebar = () => {
  const dispatch = useDispatch()
  const { cartItem, showCart } = useSelector((state) => state.Cart)
const totalAmount = cartItem.reduce((total, item) => {
  return total + item.Price * (item.quantity || 1);
}, 0);

  return (
    <div className={`cartSidebar ${showCart ? "show" : ""}`}>
      <h2 style={{color:"white"}}>Cart Items</h2>
      <button onClick={() => dispatch(toggleCart())}>  Close x
</button>

      {cartItem.map((item, index) => (
        <div key={index}>
            <img src= {item.Image} width={"150px"} height={"150px"}></img>
            
          <p>{item.Title}</p>
          <p>{item.Price}</p>
          

<button onClick={() => dispatch(increaseQty(item.id))}>
  +
</button>

<button onClick={() => dispatch(decreaseQty(item.id))}>
  -
</button>

<button onClick={() => dispatch(removeFromCart(item.id))}>
  Remove
</button>
             <p>{item.Category}</p>
        </div>
      ))}
      
      <button onClick={() => dispatch(clearCart())}>
    Clear Cart
</button>
<h2 style={{paddingBottom:"40px"}}>Total: ₹{totalAmount}</h2>
    </div>
  )
}

export default CartSidebar