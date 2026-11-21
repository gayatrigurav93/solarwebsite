
export default function SolutionCard({solutionData}){
return(
   <>
    { solutionData.map((item)=>{

        const Icon =item.logo;

        return(
            <div key={item.id} className="w-full p-4
              bg-white rounded-2xl shadow-md
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl">
       <img src={item.img} alt={item.h} 
       className="w-full h-40 sm:h-44 object-cover rounded-xl"/>
      <Icon size={28} className="text-green-700"/>
       <h3 className="font-semibold text-green-700 text-lg mt-2">{item.h}</h3>
       <p className="text-gray-600 text-sm sm:text-base mt-2 wrap-break-words"> {item.p} </p>
 </div>
        )
    })
}
    
   </>
)

}