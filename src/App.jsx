import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";


function App() {
 

  return (
    
      <BrowserRouter>
        <div className="app-layout">
          <Navbar/>
        
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
        </div>


          <Footer/>
        </div>
     </BrowserRouter>
  );
}

export default App;

