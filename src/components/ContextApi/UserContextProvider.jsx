import { useState } from "react"
import UserContext from "./userContext";


const UserContextProvider = ( {children} )=>{
    const [childrenCount, setChildrenCount] = useState(0);

    const [adultCount, setAdultCount] = useState(1);

    const [roomCount, setRoomCount] = useState(0);

    const [handleFlagCard, setHandleFlagCard] = useState(false);

    const [globalDate, setGlobalDate] = useState();
    

    return(
        <UserContext.Provider value={{
            childrenCount, setChildrenCount,
            adultCount, setAdultCount,
            roomCount, setRoomCount,
            handleFlagCard, setHandleFlagCard,
            globalDate, setGlobalDate
        }}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider;