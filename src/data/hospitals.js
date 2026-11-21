import hospital1 from "../assets/hospitals/hospital1.png";
import hospital2 from "../assets/hospitals/hospital2.png";
import hospital3 from "../assets/hospitals/hospital3.png";
import hospital4 from "../assets/hospitals/hospital4.png";
import hospital5 from "../assets/hospitals/hospital5.png";


const hospitalsData = [
    {
        id: 1,
        name: "MediCare Multispeciality Hospital",
        description: "A modern multispeciality hospital providing comprehensive healthcare services with experienced doctors and advanced medical facilities.",
        location: "Greater Noida",
        type: "Private",
        specialities: [
            "Cardiology",
            "Neurology",
            "Orthopedics",
            "Pulmonology",
            "Gastroenterology"
        ],
        rating: 4.5,
        image: hospital1,
        doctors: 24,
        beds: "250+",
        emergency: "24 × 7",
        address: "pari chowk, Near Metro Station, Noida, Uttar Pradesh - 201310",
        phone: "+91 98765 43210"

    },
    {
        id: 2,
        name: "Central Hospital",
        description: "A general healthcare institution focused on accessible and affordable medical services across a range of specialities.",
        location: "Noida",
        type: "Government",
        specialities: [
            "Dermatology",
            "Pediatrics",
            "General Medicine",
            "Cardiology",
            "Orthopedics"
        ],
        rating: 4.3,
        image: hospital2,
        doctors: 12,
        beds: "200+",
        emergency: "24 × 7",
        address: "Sector 62, Institutional Area, Noida, Uttar Pradesh - 201309",
        phone: "+91 98765 43211"
    },
    {
        id: 3,
        name: "LifeLine Medical Centre",
        description: "A patient-focused medical centre offering specialised treatments, diagnostic services and comprehensive healthcare.",
        location: "Delhi",
        type: "Private",
        specialities: [
            "Oncology",
            "Cardiology",
            "Neurology",
            "Nephrology",
            "Gastroenterology"
        ],
        rating: 4.6,
        image: hospital3,
        doctors: 32,
        beds: "350+",
        emergency: "24 × 7",
        address: "New Ashok Nagar, Delhi - 110011",
        phone: "+91 98765 43212"
    },
    {
        id: 4,
        name: "Aarogya General Hospital",
        description: "A general hospital providing essential medical care, experienced healthcare professionals and outpatient services.",
        location: "Greater Noida",
        type: "Government",
        specialities: [
            "Orthopedics",
            "Pediatrics",
            "General Medicine",
            "Dermatology",
            "Gynecology"
        ],
        rating: 4.1,
        image: hospital4,
        doctors: 18,
        beds: "300+",
        emergency: "24 × 7",
        address: "Alpha 1, Commercial Belt, Greater Noida, Uttar Pradesh - 201310",
        phone: "+91 98765 43213"
    },
    {
        id: 5,
        name: "Apex Healthcare Institute",
        description: "A modern healthcare institute offering specialised medical services, advanced facilities and patient-centred treatment.",
        location: "Gurugram",
        type: "Private",
        specialities: [
            "Neurology",
            "Dermatology",
            "Cardiology",
            "Pulmonology",
            "Oncology"
        ],
        rating: 4.4,
        image: hospital5,
        doctors: 16,
        beds: "230+",
        emergency: "24 × 7",
        address: "Sector 44, Near Phase-2, Gurugram, Haryana - 201304",
        phone: "+91 98765 43212"
    }
];

export default hospitalsData;