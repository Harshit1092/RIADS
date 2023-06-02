import React from 'react'

export const TOP = () => {
   return (
      <div className='bg-[#f75959] text-white font-semibold  text-sm px-5'>
         <div className="row align-items-center">
            <div className="col-sm-4">
               <ul className="left-info ">
                  <li>
                     <a className='no-underline text-white' href="mailto:riads.rupnagar@gmail.com">
                        <span ><svg  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg> riads.rupnagar@gmail.com</span>
                     </a>
                  </li>
                  <li>
                     <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                     </svg>
                     <a className='no-underline text-white' href="tel:01881221167"><i className="bs bs-phone-call"></i> 01881221167</a>
                     ,<a className='no-underline text-white' href="tel:9317703065">9317703065</a>
                  </li>
               </ul>
            </div>
            <div className="col-sm-8">
               <marquee className="font-bold"><b>Rupnagar Institute Of Automotive and Driving Skills</b> In Association with District Red Cross Society, Rupnagar</marquee>
            </div>
         </div>
      </div>
   )
}
