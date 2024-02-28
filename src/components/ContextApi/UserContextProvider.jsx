import { useState } from "react"
import UserContext from "./userContext";


const UserContextProvider = ( {children} )=>{
    const [childrenCount, setChildrenCount] = useState(0);

    const [adultCount, setAdultCount] = useState(1);

    const [roomCount, setRoomCount] = useState(0);

    const [handleFlagCard, setHandleFlagCard] = useState(false);

    const [globalDate, setGlobalDate] = useState();

    const [startWeekDay, setStartWeekDay] = useState("Day");

    const [endWeekDay, setEndWeekDay] = useState("Day"); 

    const [startDate, setStartDate] = useState("Check-in Date");

    const [endDate, setEndDate] = useState("Check-out-Date");
    
    
    

    return(
        <UserContext.Provider value={{
            childrenCount, setChildrenCount,
            adultCount, setAdultCount,
            roomCount, setRoomCount,
            handleFlagCard, setHandleFlagCard,
            globalDate, setGlobalDate,
            startWeekDay, setStartWeekDay,
            endWeekDay, setEndWeekDay,
            startDate, setStartDate,
            endDate, setEndDate,
        }}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider;