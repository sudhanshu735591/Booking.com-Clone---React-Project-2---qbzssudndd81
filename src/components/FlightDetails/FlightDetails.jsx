import React from 'react'
import "./flightDetails.css";

function FlightDetail() {
  return (
    <div className='flex flex-row border border-slate-200 mt-6 gap-2 p-5'>
          <div className='border-r-[1px] border-slate-200 w-[78%]'>
            <section className='flex flex-row justify-around items-center pt-2'>
              <img src='https://r-xx.bstatic.com/data/airlines_logo/6E.png' className='h-7 w-7'/>
              <div>
                  <p className='text-sm'>7.55 AM</p>
                  <p className='font-normal text-xs'>BHO .2 Feb</p>
              </div>
              <div className='relative'>
                <span className='text-sm md:text-[8px]'>13 h 40 min</span>
                <hr className='border border-gray-500 w-[100%]'/>
                <div className='flex justify-center'>
                  <i className="fa-solid fa-circle absolute w-[6px] h-[6px] top-[22px] bg-[#9a9a96] rounded-[50%]"></i>
                </div>
                <p className='font-normal text-xs'>1 Stop</p>
              </div>
              <div>
                <p className='text-sm'>6.55</p>
                <p className='font-normal text-xs'>LGW .2 Feb</p>
              </div>
            </section>
            <p className='text-sm font-normal text-left pl-2'>Indigo, Air India</p>
            <section className='flex flex-row justify-around items-center pt-2 mt-1'>
              <img src='https://r-xx.bstatic.com/data/airlines_logo/6E.png' className='h-7 w-7'/>
              <div>
                <p className='text-sm'>7.55 AM</p>
                <p className='font-normal text-xs'>BHO .2 Feb</p>
            </div>
            <div className='relative'>
              <span className='text-sm md:text-[8px]'>13 h 40 min</span>
              <hr className='border border-gray-500 w-[100%]'/>
              <div className='flex justify-between'>
                <i className="fa-solid fa-circle absolute w-[6px] h-[6px] left-[20%] top-[22px] bg-[#9a9a96] rounded-[50%]"></i>
                <i className="fa-solid fa-circle absolute w-[6px] h-[6px] top-[22px] bg-[#9a9a96] rounded-[50%]"></i>

              </div>
              <p className='font-normal text-xs'>2 Stops</p>
            </div>
            <div>
              <p className='text-sm'>6.55</p>
              <p className='font-normal text-xs'>LGW .2 Feb</p>
            </div>
            </section>
            <p className='text-sm font-normal text-left pl-2'>Indigo, Air India</p>
          </div>
          <div className='flex flex-col p-2'>
            <section className='flex flex-row-reverse items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                <path d="m 15 12.75 H 9 C 8.036 12.755 7.255 13.536 7.25 14.5 v 4 c 0.005 0.964 0.786 1.745 1.75 1.75 h 6 c 0.964 -0.005 1.745 -0.786 1.75 -1.75 v -4 C 16.745 13.536 15.964 12.755 15 12.75 z m -6 1.5 h 6 c 0.138 0 0.25 0.112 0.25 0.25 v 0.62 h -6.5 V 14.5 c 0 -0.138 0.112 -0.25 0.25 -0.25 z m 6 4.5 H 9 c -0.138 0 -0.25 -0.112 -0.25 -0.25 v -1.88 h 3.5 v 0.26 a 0.75 0.75 0 0 0 1.5 0 v -0.26 h 1.5 v 1.88 c 0 0.138 -0.112 0.25 -0.25 0.25 z M 15.69 4.42 a 3.73 3.73 0 0 0 -7.38 0 C 6.219 4.958 4.755 6.84 4.75 9 v 11.5 c 0 1.243 1.007 2.25 2.25 2.25 h 10 c 1.243 0 2.25 -1.007 2.25 -2.25 V 9 C 19.245 6.84 17.781 4.958 15.69 4.42 z M 12 2.75 c 0.95 0.002 1.796 0.603 2.11 1.5 H 9.89 C 10.204 3.353 11.05 2.752 12 2.75 z m 5.75 17.75 c -0.005 0.412 -0.338 0.745 -0.75 0.75 H 7 C 6.588 21.245 6.255 20.912 6.25 20.5 V 9 C 6.255 7.207 7.707 5.755 9.5 5.75 h 5 c 1.793 0.005 3.245 1.457 3.25 3.25 z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                <path d="m 15 14.75 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 18 C 15.745 17.588 15.412 17.255 15 17.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 3 -6.5 v 9 c 0 1.243 -1.007 2.25 -2.25 2.25 h -0.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 7.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -9 c 0 -1.243 1.007 -2.25 2.25 -2.25 h 1.75 v -8 C 9.25 0.56 9.81 0 10.5 0 h 3 c 0.69 0 1.25 0.56 1.25 1.25 v 8 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -8 -2.25 h 2.5 V 1.5 h -2.5 z m 6.5 2.25 C 17.245 11.088 16.912 10.755 16.5 10.75 h -9 C 7.088 10.755 6.755 11.088 6.75 11.5 v 9 c 0.005 0.412 0.338 0.745 0.75 0.75 h 9 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
                </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-7'>
                <path d="m 15 9.25 H 9 a 0.75 0.75 0 0 1 0 -1.5 h 6 a 0.75 0.75 0 0 1 0 1.5 z M 15.75 13 C 15.745 12.588 15.412 12.255 15 12.25 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 0 4.5 C 15.745 17.088 15.412 16.755 15 16.75 H 9 a 0.75 0.75 0 0 0 0 1.5 h 6 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z m 4 -12 v 15 c 0 1.243 -1.007 2.25 -2.25 2.25 h -1.75 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 h -4.5 v 0.5 a 0.75 0.75 0 0 1 -1.5 0 v -0.5 H 6.5 c -1.243 0 -2.25 -1.007 -2.25 -2.25 v -15 C 4.25 4.257 5.257 3.25 6.5 3.25 h 1.75 v -2 C 8.25 0.56 8.81 0 9.5 0 h 5 c 0.69 0 1.25 0.56 1.25 1.25 v 2 h 1.75 c 1.243 0 2.25 1.007 2.25 2.25 z m -10 -2.25 h 4.5 V 1.5 h -4.5 z m 8.5 2.25 C 18.245 5.088 17.912 4.755 17.5 4.75 h -11 C 6.088 4.755 5.755 5.088 5.75 5.5 v 15 c 0.005 0.412 0.338 0.745 0.75 0.75 h 11 c 0.412 -0.005 0.745 -0.338 0.75 -0.75 z"></path>
              </svg>
            </section>
            <p className='font-normal text-xs color-grey'>Included:personal item, cabin bag, checked bag</p>
            <h1 className='text-right font-bold mt-6 text-xl'>INR101,574.54</h1>
            <p className='text-right font-normal text-xs'>Total price for all travellers</p>
            <button type="button" className="flightDetailsButton">View details</button>
          </div>
        </div>
  )
}

export default FlightDetail;



