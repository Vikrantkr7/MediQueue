
import hospitals from "../data/hospitals.js";
import { useParams, Link } from "react-router-dom";
import "./HospitalDetails.css";
import LiveOPDQueue from "../components/LiveOPDQueue";
import locationMap from "../assets/hospitals/location-map.png";

import {
    BedDouble,
    Stethoscope,
    Ambulance,
    MapPin,
    Star,
    ChevronRight,
    HeartPulse,
    Brain,
    Bone,
    Wind,
    Activity,
    Scan,
    Microscope,
    Droplets,
    Baby,
    Clock,
    CalendarDays,
    Calendar,
    CalendarX,
    Phone,
    Info
} from "lucide-react";

const specialityIcons = {
    Cardiology: HeartPulse,
    Neurology: Brain,
    Orthopedics: Bone,
    Pulmonology: Wind,
    Gastroenterology: Activity,
    Dermatology: Scan,
    Oncology: Microscope,
    Nephrology: Droplets,
    "General Medicine": Stethoscope,
    Gynecology: Baby,
    Pediatrics: Baby
};


function HospitalDetails() {

    const { id } = useParams();

    const selectedHospital = hospitals.find(
        (item) => item.id === Number(id)
    );


    return (
        <main className="hospital-details-main">

            {/* Breadcrumb Navigation */}
            <nav className="hospital-breadcrumb">
                <Link to="/hospitals">Hospitals</Link>
                <ChevronRight className="breadcrumb-icon" />
                <span>{selectedHospital.name}</span>
            </nav>


            {/* Main Two-Column Layout */}
            <div className="hospital-details-layout">

                {/* LEFT COLUMN */}
                <div className="hospital-details-left">

                    {/* Hospital Header */}
                    <header className="hospital-details-header">

                        {/* Hospital Image */}
                        <div className="hospital-details-image">
                            <img
                                src={selectedHospital.image}
                                alt={selectedHospital.name}
                            />
                        </div>

                        {/* Hospital Information */}
                        <div className="hospital-details-content">

                            <div className="hospital-details-heading">

                                <h2>{selectedHospital.name}</h2>

                                <span className="hospital-type">
                                    {selectedHospital.type}
                                </span>

                            </div>


                            {/* Location and Rating */}
                            <div className="hospital-details-meta">

                                <span className="hospital-location">
                                    <MapPin className="meta-icon" />
                                    {selectedHospital.location}
                                </span>

                                <span className="hospital-rating">
                                    <Star className="meta-icon" />
                                    {selectedHospital.rating}
                                </span>

                            </div>


                            {/* Hospital Description */}
                            <p className="hospital-description">
                                {selectedHospital.description}
                            </p>


                            {/* Hospital Statistics */}
                            <div className="hospital-details-stats">

                                <div className="hospital-stat">
                                    <Stethoscope className="stat-icon" />
                                    <span>{selectedHospital.doctors} Doctors</span>
                                </div>

                                <div className="hospital-stat">
                                    <BedDouble className="stat-icon" />
                                    <span>{selectedHospital.beds} Beds</span>
                                </div>

                                <div className="hospital-stat">
                                    <Ambulance className="stat-icon" />
                                    <span>{selectedHospital.emergency} Emergency</span>
                                </div>

                            </div>

                        </div>

                    </header>


                    {/* Specialities Section */}
                    <section className="specialities-section">

                        <h3>Specialities Available</h3>

                        <div className="specialities-available">

                            {selectedHospital.specialities.map((speciality) => {

                                const Icon = specialityIcons[speciality];

                                return (
                                    <div
                                        className="speciality-card"
                                        key={speciality}
                                    >
                                        <Icon />
                                        <span>{speciality}</span>
                                    </div>
                                );

                            })}

                        </div>

                    </section>


                    {/* Doctors Section - To Be Built */}
                    <section className="doctors-section">
                        {/* Doctors at this hospital */}
                    </section>

                </div>


                {/* RIGHT COLUMN */}
                <aside className="hospital-details-right">

                    {/* Live OPD Queue */}
                    <section className="live-queue-section">
                        <LiveOPDQueue />
                    </section>


                    {/* OPD Timings */}
                    <section className="opd-timings-section">

                        <div className="opd-timings-heading">
                            <Clock className="opd-timings-icon" />
                            <h2>OPD Timings</h2>
                        </div>

                        <div className="opd-status-mon-fri">
                            <CalendarDays className="opd-day-icon" />
                            <div>
                                <span>Mon-Fri</span>
                                <p>9:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        <div className="opd-status-sat">
                            <Calendar className="opd-day-icon" />
                            <div>
                                <span>Saturday</span>
                                <p>9:00 AM-1:00 PM</p>
                            </div>
                        </div>

                        <div className="opd-status-sun">
                            <CalendarX className="opd-day-icon" />
                            <span>Sunday</span>
                            <span className="closed">Closed</span>
                        </div>

                    </section>


                    {/* Hospital Information */}
                    <section className="hospital-info-section">

                        <div className="hospital-info-heading">
                            <Info className="hospital-info-icon" />
                            <h2>Hospital Information</h2>

                        </div>

                        <div className="hospital-info-details">

                            {/* Left Side - Information */}
                            <div className="hospital-info-content">

                                {/* Address */}
                                <div className="hospital-info-address">
                                    <MapPin className="hospital-info-icon" />
                                    <span>{selectedHospital.address}</span>
                                </div>

                                {/* Contact */}
                                <div className="hospital-info-contact">
                                    <Phone className="hospital-info-icon" />
                                    <span>{selectedHospital.phone}</span>
                                </div>

                                {/* Emergency */}
                                <div className="hospital-info-emergency">
                                    <Ambulance className="hospital-info-icon" />
                                    <span>{selectedHospital.emergency} Emergency</span>
                                </div>

                            </div>
                        
                            {/* Right Side - Location Image */}
                            <div className="hospital-location-image">
                                <img
                                    src={locationMap}
                                    alt="Illustrative Hospital location map"
                                />
                            </div>
                        
                        </div>

                    </section>

                </aside>

            </div>

        </main>
    );

}

export default HospitalDetails;