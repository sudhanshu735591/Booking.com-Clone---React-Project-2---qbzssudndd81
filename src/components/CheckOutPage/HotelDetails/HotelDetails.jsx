

function HotelDetails(){
    return(
        <div className="border-2 p-3 flex flex-col gap-2 rounded-xl">
            <h1 className="text-xl">Your booking details</h1 >

            <div className="w-full flex justify-between p-3">
                <div>
                    <p>Check-in</p>
                    <h2>Fri, Feb 23, 2024</h2>
                    <p>From 2:00 PM</p>
                </div>

                <div>
                    <p>Check-in</p>
                    <h2>Fri, Feb 23, 2024</h2>
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