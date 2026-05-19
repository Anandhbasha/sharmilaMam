import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addtoCart } from "../Slices.js/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.Product.Products);

  const prods = products.find(
    (item) => item.id === Number(id)
  );
  console.log(prods);
  if (!prods) {
    return <h2>Product not found 😢</h2>;
  }
   return (
    <div className="product-layout" style={{backgroundColor:"lightseagreen"}}>
      
      {/* LEFT SIDE */}
      <div className="left">
        <img src={prods.Image} alt={prods.Title} />
        <h2>{prods.Title}</h2>
        <h3>₹{prods.Price}</h3>

        <button onClick={() => dispatch(addtoCart(prods))}>
          Add To Cart
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="right" style={{paddingTop:"50px",fontFamily:"cursive"}}>
        <h2>Description</h2>
        <p>{prods.Description}</p>
      </div>

    </div>
  );
};
export default ProductDetails