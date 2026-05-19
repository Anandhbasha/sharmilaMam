import { Link,NavLink} from "react-router-dom";
import "../Navbar.css"
import lakshmi from "../assets/images/lakshmi.jpg"
import { useDispatch,useSelector } from "react-redux";
import { toggleCart } from "../Slices.js/CartSlice";
function Navbar() {

   const dispatch = useDispatch()
  const cartItem = useSelector((state)=>state.Cart.cartItem)
 
  return (
    
    <nav className="navbar">
  
      <div className='main' >
					<a href="http://www.lakshmilawhouse.com/" className="custom-logo-link" rel="home" aria-current="page">
          <img width="55" height="50"  src={lakshmi}/></a>		
  			
        <a href="http://www.lakshmilawhouse.com/" rel="home" style={{overflow: "visible",
    whiteSpace: "normal",
    wordBreak: "break-word",
    background:
      "linear-gradient(to right, darkred, darkorange, darkblue, brown)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily:"emoji",fontWeight:"1200px",fontSize:"larger",paddingBottom:"10px"
  
}}>Lakshmi law house </a>
        
        </div>
					<div className='links'>	

      <Link to="/">Home</Link>

      <div className="dropdown">
        <span>Bookstore</span>

        <div className="dropdown-content">
          <Link to="/AcademicBooks">AcademicBooks</Link>
          <Link to="/ProfessionalBooks">ProfessionalBooks</Link>
          <Link to="/BareActs">BareActs</Link>
        </div>
      </div>
      <div className="dropdown">
        <span>Our Products</span>

        <div className="dropdown-content">
          <Link to="/Commonseal">Commonseal</Link>
          <Link to="/Minutessheet">Minutes Sheets</Link>
          <Link to="/Minutesbinder">Minutes Binder</Link>
          <Link to="/Share">Share certificate</Link>
          <Link to="/Combined">Statutory combined register</Link>
          
       
        </div>
      </div>
      <div className="dropdown">
        <span>Software & Services</span>

        <div className="dropdown-content">
          <Link to="/Etds">Etds Software</Link>
          <Link to="/Xbrl">Xbrl Software</Link>
          <Link to="/Gst">Gst Software</Link>
          <Link to="/Payroll">Payroll Software</Link>
      
          
       
        </div>
        
      
      </div>

      <Link to="/DigitalSignature">Digital Signature</Link>

      <Link to="/AboutUs">About us</Link>
       <h2 onClick={() => dispatch(toggleCart())} style={{cursor:"pointer"}}>
          {cartItem.length} 
          </h2>

</div>

    </nav>
  );
}

export default Navbar;