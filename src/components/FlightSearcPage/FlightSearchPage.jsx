import React, { useEffect, useState } from 'react'
import './FlightSearchPage.css';
import { airLines, arrives, departs } from '../../Constant/Constant';
import FlightDetail from '../FlightDetails/FlightDetails';
import FooterFlight from './FlightSearchFooter/FlightSearchFooter';
import TopNav from '../Navbar/TopNav/TopNav';
import { useLocation } from 'react-router';


function Flightsearch() {

  const [showMore, setShowMore] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const [departure, setdeparture] = useState("");



  const handleSelect = (id) => {
    setSelectedOption(id);
  }

  const handleClick = (id) => {
    setdeparture(id);
  }


  return (
    <>
      <div className='flightSearchBox'>
        <TopNav />
      </div>

      <div className='flex flex-row justify-center gap-10 p-4 md:justify-evenly sm:flex-col sm:justify-center'>
        <div className='w-[30%] sm:w-[100%]'>
          <section className='text-left'>
            <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-black'>Filters</h2>
            <p className='pl-2'>Showing 780 results</p>
          </section>
          <section className='mt-2'>
            <h2 className='text-left pl-2 text-lg font-medium text-gray-900 text-black'>Stops</h2>
            <div className="flex items-center px-2">
              <input id="list-radio-license" defaultChecked type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-left text-gray-900 font-normal text-black">Any</label>
              <span>756</span>
            </div>
            <p className='text-left pl-2 mt-[-15px] text-gray-500 font-normal cursor-pointer'>From INR70,957.66</p>

            <div className="flex items-center px-2">
              <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-left text-gray-900 font-normal text-black">1 stop max </label>
              <span>987</span>
            </div>
            <p className='text-left pl-2 mt-[-15px] text-gray-500 font-normal cursor-pointer'>From INR97,351.00</p>

          </section>
          <section className='mt-2'>
            <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-black'>Airlines</h2>

            <h6>
              {showMore ?
                airLines.map((i, index) => {
                  return (<div className="flex items-center px-2 h-6" key={index}>
                    <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                    <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-medium text-gray-900 text-black font-normal">{i.airlineName}</label>
                    <span>{i.count}</span>
                  </div>)
                }) :
                airLines.slice(0, 5).map((i, index) => {
                  return (<div className="flex items-center px-2 h-6" key={index}>
                    <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                    <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-normal text-gray-900 text-black">{i.airlineName}</label>
                    <span>{i.count}</span>
                  </div>)
                })}

              <div className='flex flex-row items-center justify-start px-2' onClick={() => { setShowMore(!showMore) }}>
                <span type="button" className="py-1 px-2 mb-2 text-sm font-medium text-blue-900 cursor-pointer border-0">
                  {showMore ? "Show less" : "Show all"}</span>
                <span className="border-0	transition group-open:rotate-180 cursor-pointer text-blue-900">
                  <svg className='svgflight' fill="none" height="14" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </h6>
          </section>

          <section className='mt-2'>
            <h2 className='text-left pl-2 text-lg font-medium text-gray-900 dark:text-black'>Flight times</h2>
            <p className='flex justify-around border-b border-stone-300 p-4 font-normal'>
              <span onClick={() => { handleClick(1) }} className={1 == departure ? "changeClass" : "prevClass"}>Outbound flight</span>
              <span onClick={() => { handleClick(2) }} className={2 == departure ? "changeClass" : "prevClass"}>Return flight</span>
            </p>

            <div>
              <h4 className='p-2 text-left'>Departs from Raja Bhoj Airport</h4>
              <h6>
                {
                  departs.map((i, index) => {
                    return (<div className="flex items-center px-2 h-6" key={index}>
                      <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                      <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-normal text-gray-900 text-black">{i.departTime}</label>
                      <span>{i.count}</span>
                    </div>)
                  })}
              </h6>

              <h4 className='p-2 text-left'>Arrives at Dubai</h4>
              <h6>
                {
                  arrives.map((i, index) => {
                    return (<div className="flex items-center px-2 h-6" key={index}>
                      <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                      <label htmlFor="bordered-checkbox-2" className="w-full text-left py-4 ms-2 text-sm font-normal text-gray-900 text-black">{i.departTime}</label>
                      <span>{i.count}</span>
                    </div>)
                  })}
              </h6>
            </div>

          </section>
          <section className='mt-2'>
            <h2 className='text-left pl-2 text-lg font-medium text-gray-900 text-black'>Duration</h2>

            <h4 className='p-2 text-left'>Maximum travel time</h4>
            <section className='text-left'>
              <p className='font-normal'>49 hour</p>
              <input type='range' min="0" max="100" className='text-left w-[100%]' />
            </section>

          </section>
        </div>
        <div className='w-[50%] flex flex-col gap-2 sm:w-[100%]'>
          <div className='flex flex-row justify-around items-center p-4 border border-slate-200'>
            <span onClick={() => { handleSelect(1) }} className={1 == selectedOption ? "changeClass" : "prevClass"}>Best
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
            </span>
            <span onClick={() => { handleSelect(2) }} className={2 == selectedOption ? "changeClass" : "prevClass"}>Cheapest</span>
            <span onClick={() => { handleSelect(3) }} className={3 == selectedOption ? "changeClass" : "prevClass"}>Fastest</span>
          </div>
          <FlightDetail />
          {/* <FlightDetail />
          <FlightDetail />
          <FlightDetail /> */}

        </div>
      </div>
      <FooterFlight />
    </>
  )
}

export default Flightsearch;