import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/mediqueue-logo.png";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

function closeMenu() {
    setMenuOpen(false);
}
    return (
        <header className="navbar-header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="MediQueue Logo" className="logo-image"/>
                    </Link>
                    <h2 className="logo-medi">Medi</h2>
                    <h2 className="logo-queue">Queue</h2>
                    
                </div>
               <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                aria-controls="nav-menu"
                >
                    ☰
                </button>
                
                <div className={`nav-menu ${menuOpen ? "open" : ""}`} id="nav-menu">

                    <div className="nav-links">
                        <Link to="/" onClick={closeMenu}>Home</Link>
                        <Link to="/hospitals" onClick={closeMenu}>Hospitals Near You</Link>
                        <Link to="/services" onClick={closeMenu}>Services</Link>
                        <Link to="/about" onClick={closeMenu}>About Us</Link>
                        <Link to="/contact" onClick={closeMenu}>Contact</Link>
                        
                    </div>

                    <div className="login-button">
                        <Link to="/login" className="login-link" onClick={closeMenu}>
                            Login
                        </Link>
                    </div>

                    <div className="signup-button">
                        <Link to="/signup" onClick={closeMenu}>
                            Signup
                        </Link>
                    </div>

                    <div className="nav-button">
                        <Link to="/bookappointment" onClick={closeMenu}>
                           
                            Book an Appointment
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;