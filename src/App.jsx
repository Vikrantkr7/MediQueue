import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hospitals from "./pages/Hospitals";
import HospitalDetails from "./pages/HospitalDetails";


function App() {
 

  return (
    
      <BrowserRouter>
        <div className="app-layout">
          <Navbar/>
        
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospitals/:id" element={<HospitalDetails />} />
        </Routes>
        </div>


          <Footer/>
        </div>
     </BrowserRouter>
  );
}

export default App;

