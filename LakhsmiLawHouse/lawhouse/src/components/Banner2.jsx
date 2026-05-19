import tds from "../assets/images/OIP.webp"
import td from "../assets/images/download.webp"
import "../Banner.css"
const Banner2 = () => {
  return (
    <div className="banner">
      <div className="content" style={{textAlign:"center"}}>
        <h1>Tdsman etds software</h1>
        <h2>Everything you need for
error-free TDS/TCS compliance</h2>
<p>Discover how TDSMAN simplifies compliance<br></br> with smart workflows and the flexibility to work on Desktop or Cloud.</p>
      </div>

      <div className="banner-image" >
        <div >        
            <img src={td} style={{width:"400px"}}/>
        </div>

        </div>
    </div>
  );
};

export default Banner2;