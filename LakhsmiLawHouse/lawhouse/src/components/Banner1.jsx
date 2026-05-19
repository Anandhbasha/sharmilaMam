import itact from "../assets/images/itact.jpg"
import direct from "../assets/images/direct.jpg"
import rec from "../assets/images/reckoner.jpg"
import "../Banner.css"
const Banner1 = () => {
  return (
    <div className="banner1">
      

      <div className="banner-image">
        <div>        
            <img src={itact}/>
        </div>

<div>        
    
    <img src={rec}/></div>
    <img src={direct}/>
      

      </div>
      <div>
        </div>
    </div>
  );
};

export default Banner1;