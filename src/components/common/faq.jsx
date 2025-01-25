import  { useState } from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { LuPlus } from "react-icons/lu";


// eslint-disable-next-line react/prop-types
export default function FAQ({data}) {
    const [openIndex, setOpenIndex] = useState();

  return (
      <div className="flex flex-col gap-4 !pt-[16px]">
          {data?.map((faq, index) => (
         <div className="relative" key={index}>
         <div
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
           className={`md:px-7 px-3 md:py-5 py-[7px] flex gap-4 md:items-center items-start border  rounded-lg text-lg font-medium cursor-pointer ${
             openIndex === index ?  "rounded-b-none bg-primary text-white" : ""
           }`}
         >
           {!(openIndex === index) ?  (
             <LuPlus className="h-6 w-6" />
           ) : (
             <TfiLayoutLineSolid className="h-6 w-6" />
           )}
           <p className="">{faq?.question}</p>
         </div>
         
         {openIndex === index &&  (
           <div className="  w-full z-50 text-black border rounded-b-lg bg-white md:px-[57px] px-7 py-5 ">
             <p className="text-textColor">
              {faq?.answer}
             </p>
           </div>
         )}
         </div> 
         
          ))}
      </div>
  )
}


{/* <div key={index} className="border-b border-[#666666] last:border-b-0">
<button
    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
    className="w-full sm:py-4 py-2 flex justify-between items-center text-left"
>
    <h3 className="text-breadcrumb header">{faq?.question}</h3>
    <FiChevronDown
        className={`w-5 h-5 text-blue-600 transition-transform ${openIndex === index ? 'transform rotate-180' : ''
            }`}
    />
</button>

<div
    className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-screen' : 'max-h-0'
        }`}
>
    {openIndex === index && (
        <div className="sm:pb-4 pb-2 text-breadcrumb">
            <p className="midtitle text-breadcrumb">{faq?.answer}</p>
          
        </div>
    )}
</div>
</div> */}