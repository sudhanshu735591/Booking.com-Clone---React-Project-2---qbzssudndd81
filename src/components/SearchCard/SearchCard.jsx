import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./SearchCard.css";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../ContextApi/userContext";
import MenCountCard from "../MenCountCard/MenCountCard";
import CalenderApp from "../Calender/Calender";

function SearchCard(){

    const [searchCity, setSearchCity] = useState();

    const navigate = useNavigate();

    const {adultCount} = useContext(UserContext);

    const {roomCount} = useContext(UserContext);

    const {childrenCount} = useContext(UserContext);
    const {handleFlagCard, setHandleFlagCard} = useContext(UserContext);

    const [flag, setFlag] = useState(false);

    const [diffDays, setDiffDays] = useState();


    function onClickHandler(){
        navigate(`/Hotels?search=${JSON.stringify(searchCity)}`)
    }


    const {startWeekDay} = useContext(UserContext);
    const {endWeekDay} = useContext(UserContext);
    const {startDate} = useContext(UserContext);
    const {endDate} = useContext(UserContext);


    function handleDateInput(e){
        // console.log(e.target.value);
        setFlag(!flag);
    }


   
    // const totalDays = calculateTotalDays(startDate, endDate);
    // console.log(totalDays); // Output: 1827


    return(
        <div className="ejdnjdn p-3 ">
            <div className="text-xl font-medium">Search</div>

            <div className="mt-2">
                <div>Destination/property name:</div>
                <div className="flex bg-white gap-2 items-center p-2">
                    <span class="fcd9eec8fb d24fc26e73 f64eb5d122" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M118.8 113.2l-31-31A4 4 0 0 0 85 81a44 44 0 1 0-4 4 4 4 0 0 0 1.2 2.8l31 31a4 4 0 0 0 5.6-5.7zM52 88a36 36 0 1 1 36-36 36 36 0 0 1-36 36z"></path></svg></span>
                    <input name="ss" className="eb46370fe1 focus:outline-none lg" onChange={(e)=>setSearchCity(e.target.value)} placeholder="Where are you going?" data-destination="1" autocomplete="off" aria-autocomplete="list" aria-controls="autocomplete-results" aria-haspopup="listbox" aria-label="Where are you going?" aria-expanded="true" role="combobox" id=":rt:"></input>
                </div>
            </div>


            <div className="mt-1">
                <div>Check-in date</div>
                <div className="">
                    <input onClick={handleDateInput} className="p-2 w-[100%] focus:outline-none lg:w-full" type="text" value={startWeekDay+","+ startDate}/>
                    {flag && <CalenderApp/>}
                </div>
            </div>

            <div className="mt-1">
                <div>Check-out date</div>
                <div className="flex flex-col">
                    <input onClick={handleDateInput} type="text" className="p-2 w-[100%]" value={endWeekDay+","+ endDate}/>
                    {flag && <CalenderApp/>}
                    <div className="mt-2">1-night stay</div>
                    <input onClick={()=>setHandleFlagCard(true)} className="p-2 w-[100%] focus:outline-none" type="text" placeholder="ideji" value={`${adultCount} adults. ${childrenCount} children. ${roomCount} room`}/>
                    {handleFlagCard &&
                    <div>
                        <MenCountCard/>
                    </div>}
                </div>
            </div>


            <div className="mt-2">
                <span className="flex gap-2">
                    <input type="checkbox" />
                    <p className="font-normal">Entire homes & apartments</p>
                </span>
                
                <span className="flex gap-2">
                    <input type="checkbox" />
                    <p className="font-normal">I'm traveling for work</p>
                </span>
            </div>


            <div className="eiend mt-2">
                <Button onClick = {onClickHandler} className="dcjnjrn" text = "Search"/>
            </div>

        </div>
    )
}

export default SearchCard;