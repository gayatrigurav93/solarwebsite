export default function Testimonials({testimonialsData}){

    return(<div className="m-4 bg-emerald-50 rounded-xl py-6">
<h2 className=" px-4 font-bold text-green-700 text-xl sm:text-2xl">Customer Testimonials</h2>
<p className="px-4 font-semibold text-gray-700">What Our Customers Say</p>

<div className="mx-4 mt-4 p-2 sm:p-4
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-4 sm:gap-6">
    {testimonialsData.map ((testimonial,index)=>(
        <div key={index} className="bg-amber-50 shadow-md rounded-2xl p-5 sm:p-6
              transition-all duration-300 ease-in-out
              hover:shadow-lg hover:border-l-4
              hover:border-l-green-500">
            <p className="text-gray-700 wrap-break-words">"{testimonial.msg}"</p>
            <h3  className="font-bold text-green-700 mt-4">{testimonial.name}</h3>
            <p className="mt-2 transition-transform duration-300 hover:scale-[1.02]">{"⭐".repeat(testimonial.rating)}</p>
        </div>))}
    
   
</div>
</div>
    )}
