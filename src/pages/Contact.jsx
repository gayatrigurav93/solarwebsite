
import ContactInfo from '../Components/ContactInfo.jsx'
import ContactForm from '../Components/ContactForm.jsx'
import ContactMap from '../Components/ContactMap.jsx'
export default function Contact(){
//form inpute state


    return(
        <>
        {/*header section */}
        <div className="relative m-6 p-6 rounded-2xl  bg-[url('/images/contacthero.png')] bg-cover bg-no-repeat bg-center ">
            {/*bg overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            {/*content overlay */}
            <div className='relative z-10' >
            <p className="inline-block p-2 border border-green-400 rounded-2xl text-green-700 ">CONTACT US</p>
            <h1 className="mt-2 text-2xl font-bold text-4xl text-white">Let's Power Your Future with Solar Energy.</h1>
            <p className='text-white'>From residential rooftops to commercial establishments and large-scale industries, <br /> we're ready to help you switch to clean, reliable and cost-effective solar energy.</p>
        <div className=" mt-2 flex flex-row gap-2">
            <span className=" px-2 py-3 rounded-4xl  border bg-green-500 text-sm text-white">Residential</span>
         <span className=" px-2 py-3 rounded-4xl border bg-green-500 text-sm text-white">Commercial</span>
          <span className=" px-2 py-3 rounded-4xl border bg-green-500 text-sm text-white">Industrial</span></div>
        </div>
        </div>

      {/*contact information */}
      <ContactInfo />

      {/*form */}
    <ContactForm />

      {/**Map */}

    <ContactMap />


        </>
    )
}