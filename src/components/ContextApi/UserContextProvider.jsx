import { useState } from "react"
import UserContext from "./userContext";


const UserContextProvider = ( {children} )=>{
    const [childrenCount, setChildrenCount] = useState(0);

    const [adultCount, setAdultCount] = useState(1);

    const [roomCount, setRoomCount] = useState(0);

    const [handleFlagCard, setHandleFlagCard] = useState(false);
    

    return(
        <UserContext.Provider value={{
            childrenCount, setChildrenCount,
            adultCount, setAdultCount,
            roomCount, setRoomCount,
            handleFlagCard, setHandleFlagCard,
        }}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider;