import FilterDropdown from "../components/FilterDropdown";
import "./Hospitals.css";
import hospitals from "../data/hospitals.js";
import hospitalImage from "../assets/hospital-hero-image.png";


const hospitalStats = [
    {
        number: "5",
        description: "Hospitals",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                <path d="M9 7h2v2H9zM13 7h2v2h-2z" />
                <path d="M9 12h2v2H9zM13 12h2v2h-2z" />
                <path d="M10 21v-4h4v4" />
            </svg>
        )
    },

    {
        number: "20+",
        description: "Specialities",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3v5a3 3 0 0 0 6 0V3" />
                <path d="M9 3v5" />
                <path d="M12 8h3a3 3 0 0 1 3 3v2" />
                <path d="M15 13h6v4h-6z" />
                <path d="M18 17v4" />
            </svg>
        )
    },

    {
        number: "100+",
        description: "Doctors",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

        )
    },
];

const locations = [
    "Greater Noida",
    "Noida",
    "Delhi",
    "Gurugram",
    "Faridabad"
];

const specialities = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Dermatology",
    "Pediatrics"
];

const hospitalTypes = [
    "Government",
    "Private"
];


function Hospitals() {
    return (
        <main className="hospital-main">

            <header className="hospital-header">

                {/* Hero Section */}
                <section className="hospital-hero">

                    {/* Left Content */}
                    <div className="hospital-hero-content">

                        <h1>
                            Find <span>Hospitals</span> Near You
                        </h1>

                        <p>
                        Explore top hospitals, check available specialities,
                        and find the right care for your needs.
                        </p>

                        {/* Hospital Statistics */}
                        <div className="hospital-stats">

                            {hospitalStats.map((item) => (
                                <div className="hospital-stat-card" key={item.description}>

                                    <span className="hospital-stat-icon">
                                        {item.icon}
                                    </span>

                                    <div>
                                        <h3>{item.number}</h3>
                                        <p>{item.description}</p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="hospital-hero-image">
                        <img
                            src={hospitalImage}
                            alt="Modern hospital building"
                        />
                    </div>

                </section>


                {/* Hospital Search Section */}
                <section className="hospital-search-section">

                    <form className="hospital-search-form">

                        <input
                            type="text"
                            placeholder="Search hospitals by name or location..."
                        />

                        <div className="hospital-filter">

                            <FilterDropdown
                                name="location"
                                defaultOption="All Locations"
                                options={locations}
                            />

                            <FilterDropdown
                                name="speciality"
                                defaultOption="All Specialities"
                                options={specialities}
                            />

                            <FilterDropdown
                                name="hospitalType"
                                defaultOption="All Types"
                                options={hospitalTypes}
                            />

                        </div>

                        <button type="submit" className="find-hospitals-button">
                            Find Hospitals
                        </button>

                    </form>

                </section>

            </header>

            {/* Hospital Listings */}

            <section className="hospital-data-section">

                {/* Section Heading */}

                <div className="hospital-data-header">
                    <h1>Hospitals in Your Area</h1>
                    <p>Showing {hospitals.length} Hospitals.</p>
                </div>
                

                {/* Hospital Cards */}
                <div className="hospital-data">
                    {hospitals.map((item) => (
                        <div className="hospital-data-card" key={item.id}>


                            {/* Hospital Image and Type */}
                            <div className="hospital-card-image">
                                <img src={item.image} alt={item.name} />
                                
                            </div>

                            {/* Hospital Information */}
                            <div className="hospital-card-content">
                                {/* Name and Type */}
                                <div className="hospital-card-heading">

                                    <h2>{item.name}</h2>
                                    <span className="hospital-type">{item.type}</span>
                                </div>

                                {/* Location */}
                                <span className="hospital-location-icon" >
                                    📍 {item.location}
                                </span>

                                {/* Specialities */}
                                <div className="hospital-specialities">
                                    {item.specialities.map((speciality) => (
                                        <span key={speciality}>{speciality}</span>
                                    ))}
                                </div>

                                {/* Rating and Button */}
                                <div className="hospital-card-footer">
                                    <span className="doctor-count">
                                        👨‍⚕️  {item.doctor} Doctors
                                    </span>
                                    
                                    <span className="hospital-rating-icon" >
                                        ⭐ {item.rating}
                                    </span>

                                    <button>View Hospital</button>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}


export default Hospitals;