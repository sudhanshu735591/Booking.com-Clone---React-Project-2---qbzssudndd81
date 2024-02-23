import Button from "../../Button/Button";
import TopNav from "../../Navbar/TopNav/TopNav";
import CheckOutHotel from "../CheckOutHotel/CheckOutHotel";
import HotelDetails from "../HotelDetails/HotelDetails";
import PriceDetails from "../PriceDetails/PriceDetails";



function PaymentDetails() {
    return (
        <div >
            <div className="bg-blue-800 p-4">
                <TopNav />
            </div>

            <div className="w-[80%] ml-40 flex gap-5">
                <div className="flex flex-col gap-3 flex ">
                    <CheckOutHotel />
                    <HotelDetails />
                    <PriceDetails />
                </div>


                <div className="mt-10 ">
                    <div className="flex border-2 items-center rounded-xl">
                        <div className="flex flex-col p-3">
                            <div className="font-bold text-lg">No payment details required</div>
                            <div className="mt-5 ">Your payment will be handled by Hotel Seven Inn Near Delhi International Airport, so you don’t need to enter any payment details for this booking.</div>
                        </div>

                        <div className="flex">
                            <img src="https://cf.bstatic.com/static/img/book/bp-no-payment-last-minute/91d509cff564c4644361f56c4b4b00d1cc9b4609.png" alt="image" />
                        </div>
                    </div>


                    <div className="flex flex-col mt-5">
                        <div className="flex gap-2 items-center gap-5 p-3">
                            <input type="checkbox"/>
                            <p className="font-normal">I consent to receiving marketing emails from Booking.com, including promotions, rewards, travel experiences, and information about Booking.com’s products and services.</p>
                        </div>

                        <div className="flex gap-2 items-center gap-5 p-3">
                            <input type="checkbox"/>
                            <p className="font-normal">I consent to receiving marketing emails from Booking.com, including promotions, rewards, travel experiences, and information about Booking.com’s products and services.</p>
                        </div>
                    </div>


                    <div className="p-4 ">
                        <div>Your booking is directly with Hotel Seven Inn Near Delhi International Airport and by completing this booking you agree to the booking conditions, general terms, and privacy policy.</div>
                    </div>


                    <div className="mt-4 flex justify-end rounded">
                        <Button text = "Complete Booking" className = "rounded-md bg-blue-700 p-3 pl-8 pr-8 text-white"/>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}


export default PaymentDetails;