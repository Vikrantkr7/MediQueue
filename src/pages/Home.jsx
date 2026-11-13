// import {Link} from "react-router-dom";

import "./Home.css";
import heroImage from "../assets/hero-doctor.jpg";


const steps =[
    {   step: "1.",
        title: "Search & Check Availability",
        description: "Browse hospitals and see which doctors are currently active and available.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        )
    }, 

    {
        step: "2.",
        title: "Book & Get Live token",
        description: "Reserve your spot online instantly and receive your digital queue token on your device.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
            </svg>
        )
    },

    {
        step: "3.",
        title: "Track Queue in Real Time",
        description: "Monitor your live position in the OPD queue and see exact wait times from wherever you are.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        )
    }

];

const features = [
    {   title: "Live OPD Token Tracking",
        description: "Check queue status on the go.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        )
    },
    
    {   title: "Verified Doctor Schedules",
        description: "Real-time active doctor timetables.",
        icon: (
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="m9 16 2 2 4-4" />
            </svg>
        )
    },

    {   title: "Zero Lobby Crowding",
        description: "Spend wait times at home or elsewhere.",
        icon: (
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    },

    {   title: "Accurate Wait Estimates",
        description: "Predictive times so you know when to arrive.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2 2" />
                <path d="M5 3 2 6" />
                <path d="m22 6-3-3" />
                <line x1="12" y1="2" x2="12" y2="5" />
            </svg>
        )
    }


];


function Home() {


    return (
        <main className="home-page">
           <div className="hero-section">
                <section className="hero">
                    <div className="hero-content">
                        <h1>Tired of Waiting at the Hospitals?<br/>
                        Track When Your Doctor Is Ready.</h1>

                        <p>
                           Check live OPD doctors availability across hospitals, book your appointment instantly online, and monitor live OPD queue token status in real time.
                        </p>
                        <form className="hospital-search">
                            <input
                                type="text"
                                placeholder="Find hospitals by name or location..."
                            />

                            <button type="submit" className="find-hospitals-button">Find Hospitals</button>
                        </form>
                        
                    </div>

                    <img src={heroImage} alt="Doctor consulting a patient" className="hero-image"/>
                </section>

           </div>

           <section className="how-it-works-section">
            <div className="how-it-works-inner">
                <h2>How it Works</h2>

                <p className="section-subtitle">
                    Getting medical care shouldn't require endless waiting<br/>
                    Here is how we make it simple.
                </p>

                <div className="steps-container">
                    
                    {steps.map((item) => (
                        <div className="step-card" key={item.step}>
                            <span className="step-badge">{item.icon}</span>
                            <h3>{item.step} {item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>        
           </section>
               
            
            <section className="why-choose-section">
                <div className="why-choose-inner">
                    <h2>Why Choose MediQueue</h2>

                    <div className="why-choose-container">

                        {features.map((item) => (
                            <div className="why-choose-card" key={item.title}>
                                <span className="why-choose-badge">{item.icon}</span>
                                <div className="why-choose-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
             


        </main>
    );
}

export default Home;