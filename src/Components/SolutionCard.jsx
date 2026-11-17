
export default function solutionCard({solutionData}){
return(
   <>
    { solutionData.map((item)=>{

        const Icon =item.logo;

        return(
            <div key={item.id} className= " p-4 bg-white rounded-2xl shadow transition-all duration-300 hover:-translate-y-1">
       <img src={item.img} alt="Industrial" 
       className="w-full h-40 object-cover "/>
      <Icon size={28} className="text-green-700"/>
       <h3 className="font-semibold text-green-700">{item.h}</h3>
       <p> {item.p} </p>
 </div>
        )
    })
}
    
   </>
)

}