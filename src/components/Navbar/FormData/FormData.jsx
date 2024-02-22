import { useContext, useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./FormData.css";
import { useNavigate } from "react-router";
import UserContext from "../../ContextApi/userContext";

function FormData(props){

    const {flag, setFlag} = props;

    const [searchCity, setSearchCity] = useState();

    const navigate = useNavigate();

    const {childrenCount} = useContext(UserContext);

    const {adultCount} = useContext(UserContext);

    const {roomCount} = useContext(UserContext);

    const {setHandleFlagCard}= useContext(UserContext);
    
    function onChangeHandler(e){
        setSearchCity(e.target.value);
    }

    function onClickHandler(){
        navigate(`/Hotels?search=${JSON.stringify(searchCity)}`)
    }

    return(
        <>
            <form method="submit">
                <div className="edjneidue98 lg:flex-col lg:p-0 lg:gap-1 ">
                    <input onChange={onChangeHandler} className="edjned lg:border-2" type="text" placeholder="Where are you going?"/>
                    <input className="edjned lg:border-2" onClick={()=>setFlag(!flag)} type="date" placeholder="Date"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-5 absolute left-[62%] top-[13px] lg:absolute lg:left-[1%] lg:top-[65px]"><path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path></svg>
                    <input onClick={()=>setHandleFlagCard(true)} className="edjned lg:border-2" type="text" value={`${adultCount} adults. ${childrenCount} children. ${roomCount} room`}/>
                    <Button onClick = {onClickHandler} text ="Search" className="bg-violet-700 h-[55px] text-white w-[35%] lg:w-full lg:h-[40px]"/>
                </div>
            </form> 
        </>
    )
}

export default FormData;