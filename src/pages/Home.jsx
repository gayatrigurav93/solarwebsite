import { useNavigate } from "react-router-dom"
import {
 HardHat,Award,PiggyBank,Trees
} from "lucide-react";
import solutionData from "../data/solutionData";
import SolutionCard from "../Components/SolutionCard.jsx";
import Testimonials from "../Components/Testimonials.jsx"
import testimonialsData from "../data/testimonialsData.js";

export default function Home(){

  const navigate =useNavigate()
    return (
      <>
          <section className=" bg-[url('/images/homehero.png')] bg-cover bg-center bg-no-repeat
          m-4 min-h-[65vh] flex flex-row items-center justify-between  gap-8 md:relative">

      {/* First flex item */}
      <div className="w-1/2 ">
        <h1 className="text-5xl font-bold text-gray-800">
          Power Your Home And Business With <br />
          <span className="text-green-700">Clean Solar Energy</span>
        </h1>

        <p className="mt-8 text-blue bg-amber-50  md:bg-transparent  text-gray-600">
          We design, supply and install high-quality solar systems
          for residential and commercial properties — making you
          save money and build a cleaner tomorrow.
        </p>
      </div>

      {/* Second flex item */}
      <div className=" flex mr-4 md:absolute right-28 bottom-28 ">
        <button className="bg-green-600 text-white px-6 py-4 rounded-sm
         hover:bg-green-700 hover:scale-105
         transition-all duration-300 ease-in-out
         shadow-md hover:shadow-lg
          cursor-pointer"
        onClick={()=> navigate("/Services")}>
          Explore Our Services
        </button>
      </div>
  
    </section>



{/* Statistics Section */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8
                justify-items-center items-center
                mx-4 my-8 py-8 px-4
                bg-green-50 border border-gray-200
                rounded-lg shadow-sm">

  <div className="text-center">
    <h2 className="text-3xl font-bold text-green-700">500+</h2>
    <h3 className="text-base font-semibold text-gray-900 mt-2">
      Happy Customers
    </h3>
    <p className="text-sm text-gray-700 mt-2">
      Homes and businesses served
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-3xl font-bold text-green-700">1 MW+</h2>
    <h3 className="text-base font-semibold text-gray-900 mt-2">
      Solar Installed
    </h3>
    <p className="text-sm text-gray-700 mt-2">
      Clean energy capacity installed
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-3xl font-bold text-green-700">5+</h2>
    <h3 className="text-base font-semibold text-gray-900 mt-2">
      Years Experience
    </h3>
    <p className="text-sm text-gray-700 mt-2">
      Expertise in solar solutions
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-3xl font-bold text-green-700">24/7</h2>
    <h3 className="text-base font-semibold text-gray-900 mt-2">
      Customer Support
    </h3>
    <p className="text-sm text-gray-700 mt-2">
      Support when you need it
    </p>
  </div>

</div>


    {/*our solar solutions */}
<section className="m-4">
  {/*head */}
  <div className=" flex flex-col md:flex-row justify-between items-center gap-4 mb-8 ">
<div>
<h2 className="font-bold text-green-700 text-2xl ">Our Solar SOlutions</h2>
<p className="font-semibold text-gray-700">Comprehensive solar solutions for homes and businesses of all sizes.</p>
</div>
<button className="bg-green-600 text-white p-2 rounded-2xl
                   hover:bg-amber-50 hover:border-2 hover:border-green-600 hover:text-green-700
                   transition-all duration-300 cursor-pointer"
                   onClick={()=> navigate("/Services")}>View Our All Services →</button>
</div>

{/*cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {/*Residential solar commercila industrial accesories*/}

<SolutionCard solutionData={solutionData} />


</div>
</section>
 
 
 {/*Why choose us section */}

 <section className="flex flex-2 gap-4 items-center justify-center bg-gray-100 m-4 p-8 rounded-2xl ">
  
<img src="/images/whyChoose.png" alt="whychooseus"
  className="m-2 p-2 rounded-2xl w-1/2  h-auto" />

<div>
  {/*headings tags */}
  <h2 className="font-bold text-green-700">Why Choose Us ?</h2>
  <p className="pb-2">Your Trusted Solar Energy Partner</p>
     
     {/*points why choose*/}

     <div className="flex flex-2 items-center gap-4">
      <HardHat size={23} className="text-green-700"/>
      <div>
      <h3 className="font-semibold  text-green-700">Expert Installation</h3>
      <p>Certified & experienced team</p>
       </div>
    </div>

     <div className="flex flex-2 items-center gap-2">
      <Award size={23} className="text-green-700"/>
      <div>
      <h3 className="font-semibold  text-green-700">Premium Quality Products</h3>
      <p>Top global brands</p>
       </div>
    </div>

     <div className="flex flex-2 items-center gap-2">
      <PiggyBank size={23} className="text-green-700"/>
      <div>
      <h3 className="font-semibold  text-green-700">Cost Savings</h3>
      <p>Lower electricity bills</p>
       </div>
    </div>

     <div className="flex flex-2 items-center gap-2">
      <Trees size={23} className="text-green-700"/>
      <div>
      <h3 className="font-semibold text-green-700">Sustainable Future</h3>
      <p>Clean energy for generations</p>
       </div>
    </div>
</div>

 </section>

{/*tesimonial section */}

<Testimonials testimonialsData={testimonialsData} />

</>
    )
}