import { useState } from "react"
import UserContext from "./userContext";


const UserContextProvider = ( {children} )=>{
    const [childrenCount, setChildrenCount] = useState(0);

    const [adultCount, setAdultCount] = useState(1);

    const [roomCount, setRoomCount] = useState(0);

    const [handleFlagCard, setHandleFlagCard] = useState(false);

    const [startWeekDay, setStartWeekDay] = useState("Day");

    const [endWeekDay, setEndWeekDay] = useState("Day"); 

    const [startDate, setStartDate] = useState("Check-in Date");

    const [endDate, setEndDate] = useState("Check-out-Date");

    const [startYear, setStartYear] = useState("Year");

    const [endYear, setEndYear] = useState("Year");


    const [globalLoginCheck, setGlobalLoginCheck] = useState(localStorage.getItem("Token")?true:false);

    return(
        <UserContext.Provider value={{
            childrenCount, setChildrenCount,
            adultCount, setAdultCount,
            roomCount, setRoomCount,
            handleFlagCard, setHandleFlagCard,
            startWeekDay, setStartWeekDay,
            endWeekDay, setEndWeekDay,
            startDate, setStartDate,
            endDate, setEndDate,
            startYear, setStartYear,
            endYear, setEndYear,
            globalLoginCheck, setGlobalLoginCheck
        }}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider;