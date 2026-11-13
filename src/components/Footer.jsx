import logo from "../assets/mediqueue-logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer () {
    return (

        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <div className="footer-brand-header">
                         <img src={logo} alt="MediQueue Logo" className="footer-logo-image"/>
                
                        <h2 className="footer-logo-medi">Medi</h2>
                        <h2 className="footer-logo-queue">Queue</h2>
                    </div>
                    <p>Transforming hospital queues and appointments for everyone.</p>
                </div>
            
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/doctors">Find a Doctor</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                </div>

                <div className="footer-support">
                    <h3>Support</h3>
                
                    <Link to="/contact">Contact</Link>
                    <p>support@mediqueue.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 MediQueue. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;