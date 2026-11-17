export default function Testimonials({testimonialsData}){

    return(<div className="m-4 bg-emerald-50">
<h2 className=" font-bold text-green-700 text-2xl ">Customer Testimonials</h2>
<p className=" font-semibold text-gray-700">What Our Customers Say</p>

<div className=" m-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {testimonialsData.map ((testimonial,index)=>(
        <div key={index} className="bg-amber-50 shadow-md rounded-2xl p-6 
        hover:transition-all duration-300 ease-in-out
hover:border-l-2
hover:border-l-green-500">
            <p>"{testimonial.msg}"</p>
            <h3>{testimonial.name}</h3>
            <p className="transition-transform duration-300
hover:scale-[1.02]">{"⭐".repeat(testimonial.rating)}</p>
        </div>))}
    
   
</div>
</div>
    )}
