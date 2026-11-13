import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/mediqueue-logo.png";

function Navbar() {
    return (
        <header >
            <nav>
                <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="MediQueue Logo" className="logo-image"/>
                    </Link>
                    <h2 className="logo-medi">Medi</h2>
                    <h2 className="logo-queue">Queue</h2>
                    
                </div>
               
                

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/doctors">Find a Doctor</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="nav-button">
                    <Link to="/bookappointment">
                        <button>Book an Appointment</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;