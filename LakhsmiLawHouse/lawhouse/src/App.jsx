import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BareActs from "./pages/BareActs";
import ProfessionalBooks from "./pages/ProfessionalBooks";
import AcademicBooks from "./pages/AcademicBooks";
import "./App.css"
import Commonseal from "./pages/Commonseal";
import Minutessheet from "./pages/Minutessheet";
import Minutesbinder from "./pages/Minutesbinder";
import Share from "./pages/Share";
import Combined from "./pages/Combined";
import Etds from "./pages/Etds";
import Xbrl from "./pages/Xbrl";
import Gst from "./pages/Gst";
import Payroll from "./pages/Payroll";
import "./App.css"
import DigitalSignature from "./pages/DigitalSignature";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login.jsx/Login";
import CartSidebar from "./components/CartSidebar";
import TypingText from "./components/Typingtext";
import Bounce from "./components/Bounce";

function App() {
  
  return (
    
    <BrowserRouter>
     <div className='App'>
      <div>
          <Navbar/>
          
          <CartSidebar/>
        </div>
          
        
   
       
    
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/AcademicBooks" element={<AcademicBooks/>} />
        <Route path="/ProfessionalBooks" element={<ProfessionalBooks/>} />
        <Route path="/Commonseal" element={<Commonseal/>} />
        <Route path="/Minutessheet" element={<Minutessheet />} />
        <Route path="/Minutesbinder" element={<Minutesbinder />} />
        <Route path="/Share" element={<Share />} />
        <Route path="/Combined" element={<Combined />} />
        <Route path="/Etds" element={<Etds />} />
        <Route path="/Xbrl" element={<Xbrl />} />
        <Route path="/Gst" element={<Gst />} />
        <Route path="/Payroll" element={<Payroll />} />
        <Route path="/DigitalSignature" element={<DigitalSignature/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path='/login' element={<Login/>}/>
       
     

        
        
        
      </Routes>
      </div>
      </BrowserRouter>
      
  
  );
}

export default App;