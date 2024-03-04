import dateFormat from 'dateformat';
import React, { useContext, useState } from 'react'
import CalenderApp from '../../../Calender/Calender';
import UserContext from '../../../ContextApi/userContext';
import { useNavigate } from 'react-router';

const FlightNavbar = () => {

    const [flag, setFlag] = useState(false);

    const [startCity, setStartCity] = useState();

    const [endCity, setEndCity] = useState();

    const {startWeekDay} = useContext(UserContext);

    const {startDate} = useContext(UserContext);

    const {endDate} = useContext(UserContext);


    const handleChange = (e) => {
        setFlag(!flag);
    };

    const navigate = useNavigate();


    const handleClickButton = (e)=>{
        e.preventDefault();
        if(startCity && endCity){
            navigate("/FlightSearchPage", {state : {source:startCity , destination : endCity}});
        }

    }

    function swapCity(){
       let temp = startCity;
       setStartCity(endCity);
       setEndCity(temp);
    }

    return (
        <div className='bg-gray-100 p-4'>
            <div className=' w-[71%] m-auto lg:w-[100%]'>
                <p className='text-[28px] font-bold text-left'>Compare and book flights with ease</p>
                <p className='text-sm text-left font-normal'>Discover your next dream destination</p>

            </div>

            <form className='w-[71%] flex border-[#ffb700] border-[4px] m-auto mt-3'>
                <div className='w-[78%] bg-gray-100 flex pl-2 items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'>
                        <path d="M18.33 3.57L5.7 9.955l.79.07-1.96-1.478a.75.75 0 0 0-.753-.087l-2.1.925C.73 9.856.359 10.967.817 11.88c.11.22.263.417.45.577l3.997 3.402a2.94 2.94 0 0 0 3.22.4l3.62-1.8-1.084-.671v5.587a1.833 1.833 0 0 0 2.654 1.657l1.88-.932a1.85 1.85 0 0 0 .975-1.226l1.87-7.839-.396.498 3.441-1.707a3.494 3.494 0 1 0-3.11-6.259zm.672 1.342a1.994 1.994 0 0 1 1.775 3.571l-3.44 1.707a.75.75 0 0 0-.396.498l-1.87 7.838a.35.35 0 0 1-.185.232l-1.88.932a.335.335 0 0 1-.486-.304V13.79a.75.75 0 0 0-1.084-.672l-3.62 1.8a1.44 1.44 0 0 1-1.578-.197l-3.997-3.402a.35.35 0 0 1 .073-.577l2.067-.91-.754-.087 1.96 1.478a.75.75 0 0 0 .79.07l12.63-6.383zm-3.272.319l-4.46-2.26a1.852 1.852 0 0 0-1.656-.001l-1.846.912a1.85 1.85 0 0 0-.295 3.128l2.573 1.955a.75.75 0 1 0 .908-1.194L8.38 5.816a.35.35 0 0 1 .055-.591l1.845-.912a.351.351 0 0 1 .315 0l4.456 2.256a.75.75 0 0 0 .678-1.338z">
                        </path>
                    </svg>
                    <input type="text" value={startCity} name="source" placeholder="Where from?" onChange={(e)=>setStartCity(e.target.value)}
                        className="text-sm font-semibold  p-5 outline-none w-[100%] bg-gray-100" />

                </div>


                <div className='border-x-4 border-[#ffb700] w-[10%] flex items-center justify-center'>
                    <svg onClick={swapCity} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill='blue' d="M10.5 15.75h12.75a.75.75 0 0 0 0-1.5H10.5a.75.75 0 0 0 0 1.5zm9.22-3.22l3 3v-1.06l-3 3a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06zM13.5 8.25H.75a.75.75 0 0 0 0 1.5H13.5a.75.75 0 0 0 0-1.5zm-9.22 3.22l-3-3v1.06l3-3a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06z">
                        </path></svg>
                </div>


                <div className='w-[78%] bg-gray-100 flex pl-2 items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'>
                        <path d="M19.906 12.996l-12.72-6.2.421.672-.006-2.457a.75.75 0 0 0-.386-.654L5.207 3.244c-.95-.468-2.058-.091-2.51.826a1.85 1.85 0 0 0-.187.706l-.295 5.242a2.95 2.95 0 0 0 1.63 2.802l3.618 1.8-.117-1.27-4.461 3.359a1.85 1.85 0 0 0 .289 3.13l1.883.933a1.85 1.85 0 0 0 1.564.037l7.381-3.248-.636-.014 3.44 1.71a3.494 3.494 0 1 0 3.11-6.259.75.75 0 0 0-.334-.078h-.005v.75l.329-.674zm-.658 1.348a.75.75 0 0 0 .329.076h.005v-.75l-.334.672a1.994 1.994 0 1 1-1.774 3.571l-3.44-1.71a.75.75 0 0 0-.636-.014l-7.38 3.247a.35.35 0 0 1-.295-.008l-1.881-.932a.35.35 0 0 1-.053-.59l4.46-3.358a.75.75 0 0 0-.118-1.27l-3.618-1.8a1.45 1.45 0 0 1-.8-1.377l.295-5.238a.35.35 0 0 1 .504-.29l1.975 1.096-.386-.654.006 2.457a.75.75 0 0 0 .421.672l12.72 6.2zm-2.234-2.419l-.9-4.918a1.85 1.85 0 0 0-.995-1.32l-1.853-.92a1.85 1.85 0 0 0-2.669 1.657v3.234a.75.75 0 0 0 1.5 0V6.425a.35.35 0 0 1 .505-.313l1.85.918a.35.35 0 0 1 .187.249l.9 4.916a.75.75 0 1 0 1.475-.27z">
                        </path></svg>
                    <input type="text" name="destination" placeholder='Where to?' value={endCity} onChange={(e)=>setEndCity(e.target.value)}
                        className="text-sm border-r-4 border-[#ffb700] font-semibold p-5 outline-none w-[100%] bg-gray-100" />

                </div>


                <div className='w-[78%] bg-gray-100 flex pl-2 items-center justify-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'>
                        <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zM18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6zM5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zM12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z">
                        </path></svg>
                    <input type="text" name="date" value={`${startWeekDay}, ${startDate}`} onClick={handleChange}
                        className="text-sm border-r-4 border-[#ffb700] font-semibold p-5 outline-none w-[120%] bg-gray-100" />
                </div>


                <button onClick={handleClickButton} className="lg:w-[100%] bg-blue-600 hover:bg-blue-800 p-[15px] w-[10%] text-white font-semibold cursor-pointer">Submit</button>
            </form>

            {flag && <CalenderApp />}
        </div>
    )
}

export default FlightNavbar