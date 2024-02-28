import { useContext } from "react";
import UserContext from "../../ContextApi/userContext";


function HotelDetails(){

    const {startWeekDay} = useContext(UserContext);
    const {endWeekDay} = useContext(UserContext);
    const {startDate} = useContext(UserContext);
    const {endDate} = useContext(UserContext);

    const {endYear} = useContext(UserContext);

    const {startYear} = useContext(UserContext);

    // var diffDays = date2.getDate() - date1.getDate(); 
    // alert(diffDays)
    

    
    return(
        <div className="border-2 p-3 flex flex-col gap-2 rounded-xl">
            <h1 className="text-xl">Your booking details</h1 >

            <div className="w-full flex justify-between p-3">
                <div>
                    <p>Check-in</p>
                    <h2>{startWeekDay}, {startDate}, {startYear}</h2>
                    <p>From 12:00 PM</p>
                </div>

                <div>
                    <p>Check-out</p>
                    <h2>{endWeekDay}, {endDate}, {endYear}</h2>
                    <p>From 2:00 PM</p>
                </div>
            </div>

            <div>
                <p className="font-normal">Total length of stay:</p>
                <h3 className="font-bold">1 night</h3>
            </div>
        </div>
    )
}


export default HotelDetails;