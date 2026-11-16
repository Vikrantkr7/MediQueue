import hospital1 from "../assets/hospitals/hospital1.png";
import hospital2 from "../assets/hospitals/hospital2.png";
import hospital3 from "../assets/hospitals/hospital3.png";
import hospital4 from "../assets/hospitals/hospital4.png";
import hospital5 from "../assets/hospitals/hospital5.png";


const hospitalsData = [
    {
        id: 1,
        name: "MediCare Multispeciality Hospital",
        location: "Greater Noida",
        type: "Private",
        specialities: ["Cardiology", "Neurology", "Orthopedics"],
        rating: 4.5,
        image: hospital1,
        doctor: 24
    },
    {
        id: 2,
        name: "Central Hospital",
        location: "Noida",
        type: "Government",
        specialities: ["Dermatology", "Pediatrics", "General Medicine"],
        rating: 4.3,
        image: hospital2,
        doctor: 12
    },
    {
        id: 3,
        name: "LifeLine Medical Centre",
        location: "Delhi",
        type: "Private",
        specialities: ["Oncology", "Cardiology", "Neurology"],
        rating: 4.6,
        image: hospital3,
        doctor: 32
    },
    {
        id: 4,
        name: "Aarogya General Hospital",
        location: "Greater Noida",
        type: "Government",
        specialities: ["Orthopedics", "Pediatrics", "General Medicine"],
        rating: 4.1,
        image: hospital4,
        doctor: 18
    },
    {
        id: 5,
        name: "Apex Healthcare Institute",
        location: "Gurugram",
        type: "Private",
        specialities: ["Neurology", "Dermatology", "Cardiology"],
        rating: 4.4,
        image: hospital5,
        doctor: 16
    }
];

export default hospitalsData;