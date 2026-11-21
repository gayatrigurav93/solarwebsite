import {FaFacebook, FaInstagram,FaEnvelope, FaCheckCircle,FaLeaf,FaSun } from "react-icons/fa"

export default function Footer(){
    return(
<footer className=" flex flex-col w-full md: flex-row justify-between items-center gap-4 
z-50 bg-linear-to-r from-green-950 via-green-800 to-emerald-950 text-white p-2
hover:text-green-400
transition-all duration-300">
     <div>
        <h1 className="text-center text-xl font-bold">SalarPower</h1>
        <div className="flex gap-2 justify-center items-center">
        <span><FaFacebook className="text-blue-500 hover:scale-125 transition duration-300" /></span>
        <span><FaInstagram className="text-pink-500 hover:scale-125 transition duration-300" /></span>
        <span><FaEnvelope className="text-gray-500 hover:scale-125 transition duration-300" /></span>
    </div>

    </div>
    <div className="text-center">
        <h1 className="text-xl font-bold">Quick Links:</h1>
        <div className="flex justify-center items-center gap-4 p-2 ">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
        </div>
    </div>

    <div className="text-center">
        <h1 className="text-xl font-bold">Our Services:</h1>
 <ul className="text-left">
    <li className="flex items-center gap-2"><FaSun className="text-yellow-600" />Solar Panel Installation </li>
    <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600" />Solar Consultation </li>
    <li className="flex items-center gap-2"><FaLeaf className="text-green-600" />Maintenance And Support </li>
</ul>      

    </div>
</footer>
     )
}