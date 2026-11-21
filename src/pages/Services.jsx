import { useNavigate } from "react-router-dom";

export default function Services(){
    const navigate = useNavigate();
   
    return(
        <> 
        {/*headr sect */}
        <section className="relative m-4 p-5 sm:p-8 md:p-10
  min-h-[40vh] md:min-h-[45vh]
  flex items-center
  bg-[url('/images/serviceshero.png')]
  bg-cover bg-center md:bg-right
  rounded-2xl overflow-hidden">
          
            {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
          <div className="relative z-10 w-full md:w-3/4 lg:w-2/3">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">Smart Solar Solutions for a Brighter Future</h1>
          <p className="text-white mt-4 text-sm sm:text-base leading-relaxed">Explore reliable and affordable <br /> <span className="font-semibold text-green-600">solar energy solutions </span>designed for homes, businesses, and industries. <br />We help you make the switch to clean energy while reducing your electricity expenses.</p>
          <button className="btn mt-5"
          onClick={()=>navigate("/Contact")} >  Get a Free Consultation →</button>
        </div>
        </section>

         </>
    )
        
   
}