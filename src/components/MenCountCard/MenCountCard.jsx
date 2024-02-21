import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./MenCountCard.css";
import UserContext from "../ContextApi/userContext";

function MenCountCard() {
    const {childrenCount, setChildrenCount} = useContext(UserContext);

    const {adultCount, setAdultCount} = useContext(UserContext);

    const {roomCount, setRoomCount} = useContext(UserContext);

    // const [handleFlagCard, setHandleFlagCard] = useState(false);

    const {setHandleFlagCard} = useContext(UserContext);


    function handleIncrementForChildren() {
        setChildrenCount(prevCount => prevCount + 1);
    }


    function handleDecrementForChildren() {
        if (childrenCount > 0) {
            setChildrenCount(prevCount => prevCount - 1);
        }
    }


    function handleIncrementForAdult() {
        setAdultCount(prevCount => prevCount + 1);
    }

    function haandleDecrementForAdult() {
        if (adultCount > 1) {
            setAdultCount(prevCount => prevCount - 1);
        }
    }

    function handleIncrementForRoom(){
        setRoomCount(prevCount=>prevCount+1);   
    }

    function handleDecrementForRoom(){
        if(roomCount>1){
            setRoomCount(prevCount=>prevCount-1);
        }
    }

    function handleFlag(){
        setHandleFlagCard(false);
    }

    return (
        <div className="ejdej">
            <div className="flex justify-between">
                <div>Adult</div>
                <div className="djeded">
                    <button onClick={haandleDecrementForAdult}>-</button>
                    <button>{adultCount}</button>
                    <button onClick={handleIncrementForAdult}>+</button>
                </div>
            </div>

            <div className="flex justify-between">
                <div>Children</div> 
                <div className="djeded">
                    <button onClick={handleDecrementForChildren}>-</button>
                    <button>{childrenCount}</button>
                    <button onClick={handleIncrementForChildren}>+</button>
                </div>
            </div>

            <div className="flex justify-between">
                <div>Rooms</div>
                <div className="djeded">
                    <button onClick={handleDecrementForRoom}>-</button>
                    <button>{roomCount}</button>
                    <button onClick={handleIncrementForRoom}>+</button>
                </div>
            </div>

            <div className="edndj">
                <Button onClick={handleFlag} text="Done" className="edjedn" />
            </div>
        </div>
    )
}

export default MenCountCard;