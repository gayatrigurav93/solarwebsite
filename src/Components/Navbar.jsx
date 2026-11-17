import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";


export default function Navbar(){

  const [isOpen, setIsOpen] = useState(false);
    
  
  return(
     
     <header className="fixed top-0 left-0 w-full h-28 z-50 flex items-center justify-between px-8 bg-white">

        <div className="translate-x-[50px]">
            <h1 className=" px-2 py-2 text-2xl font-bold text-green-600">SolarPower</h1>
        </div>

      <nav className="hidden md:flex items-center justify-center gap-3 translate-x-[-50px]">
        <NavLink to="/" className={({isActive})=> `px-2 py-2 ${isActive ? "text-green-500 font-semibold" :"text-gray-500 "}`}> Home </NavLink>
        <NavLink to="/About" className={({isActive})=> `px-2 py-2 ${isActive ? "text-green-500 font-semibold" :"text-gray-500 "}`}>About</NavLink>
        <NavLink to="/Services" className={({isActive})=> `px-2 py-2 ${isActive ? "text-green-500 font-semibold" :"text-gray-500"}`}>Services</NavLink>
        <NavLink to="/Contact" className={({isActive})=> `px-2 py-2 ${isActive ? "text-green-500 font-semibold" :"text-gray-500"}`}>Contact</NavLink>
      </nav>

      {/*for mobile ,menu  */}

      
        <button className="md:hidden lg:hidden " onClick={() => setIsOpen(!isOpen)}>
          <Menu className=" mr-2 text-2xl text-green-600 w-5 h-5" />
        </button>
       {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 absolute top-full right-0 w-64 bg-white px-6 py-5 shadow-md">
          
          <NavLink to="/" onClick={()=>setIsOpen(false)} className={({isActive})=>`px-6 py-5 ${isActive ? "text-green-500 font-semibold" :"text-gray-500"}`}>Home</NavLink>
          <NavLink to="/About" onClick={()=>setIsOpen(false)} className={({isActive})=>`px-6 py-5 ${isActive ? "text-green-500 font-semibold" :"text-gray-500"}`}>About</NavLink>
          <NavLink to="/Services" onClick={()=>setIsOpen(false)} className={({isActive})=>`px-6 py-5 ${isActive ? "text-green-500 font-semibold" :"text-gray-500"}`}>Services</NavLink>
          <NavLink to="/Contact" onClick={()=>setIsOpen(false)} className={({isActive})=>`px-6 py-5 ${isActive ? "text-green-500 font-semibold" :"text-gray-500"}`}>Contact</NavLink>
        
        
     <div className="w-full md:w-auto basis-auto md:basis-auto">
        <button className="mt-3 w-full rounded-full py-3 px-4 bg-green-600 text-white font-semibold hover:bg-green-500 transition-all"> Get A Free Quote</button>
     </div>
</nav> )}
        
    </header> 
    
    )
}