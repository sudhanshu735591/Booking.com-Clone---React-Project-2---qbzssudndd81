import Navbar from "../../Navbar/Navbar";
import TopNav from "../../Navbar/TopNav/TopNav";
import CheckOutHotel from "../CheckOutHotel/CheckOutHotel";
import HotelDetails from "../HotelDetails/HotelDetails";
import PriceDetails from "../PriceDetails/PriceDetails";
import UserDetails from "../UserDetails/UserDetails";
import "./FormDetails.css";


function   FormDetails() {
    return (
        <div>
            <div className="bg-indigo-800 p-3">
                <TopNav />
            </div>

            <div className="p-2 flex ml-40 gap-4">
                <div className="flex flex-col gap-3 flex w-[30%]">
                    <CheckOutHotel />
                    <HotelDetails />
                    <PriceDetails />
                </div>

                <div className="border-2 p-3 mt-10 w-[60%] rounded-xl flex flex-col gap-3">
                    <div className="border-2 p-3">
                        <div className="font-bold">You are signed in</div>
                        <div>ersshekhar05@gmail.com</div>
                    </div>



                    <div className="border-2 p-3">
                        <UserDetails/>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default FormDetails;