import { useEffect, useState } from "react";
import Navbar from "../../Navbar/navbar";
import TopNav from "../../Navbar/TopNav/TopNav";
import CheckOutHotel from "../CheckOutHotel/CheckOutHotel";
import HotelDetails from "../HotelDetails/HotelDetails";
import PriceDetails from "../PriceDetails/PriceDetails";
import UserDetails from "../UserDetails/UserDetails";
import "./FormDetails.css";
import { useParams } from "react-router";


function  FormDetails() {

    const {id} = useParams();

 

    return (
        <div>
            <div className="bg-indigo-800 p-3">
                <TopNav />
            </div>

            <div className="p-2 flex ml-40 gap-4 lg:m-0 lg:w-full lg:flex lg:flex-col lg:p-7">
                <div className="flex flex-col gap-3 flex w-[30%] lg:w-full">
                    <CheckOutHotel />
                    <HotelDetails />
                    <PriceDetails />
                </div>

                <div className="border-2 p-3 mt-10 w-[60%] rounded-xl flex flex-col gap-3 lg:w-full">
                    <div className="border-2 p-3">
                        <div className="font-bold">You are signed in</div>
                        <div>ersshekhar05@gmail.com</div>
                    </div>

                    <div className="border-2 p-3">
                        <UserDetails id = {id}/>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default FormDetails;