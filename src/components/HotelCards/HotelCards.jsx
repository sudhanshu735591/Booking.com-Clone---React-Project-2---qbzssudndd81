import { useEffect, useReducer, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./HotelCards.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function HotelCards() {
    let [searchParams] = useSearchParams();

    // const [data, dispatch] = useReducer(reducer, initialState);

    const [allData, setAllData] = useState([]);

    const navigate = useNavigate();

    const apiData = async () => {
       try{
        const data = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":${searchParams.get("search")}}`, {
            method: "GET",
            headers: {
                projectID: "0f6ipegajht2",
            }
        })

        const res = await data.json();
        console.log("Response", res?.data?.hotels);
        setAllData(res?.data?.hotels)
       }
       catch(error){
        console.error(error)
       }
    }

    useEffect(() => {
        apiData();
    }, [])


    function onClickImageHandler(){
        navigate("/Singleinfo");
    }


    return (
        <div>
            <Navbar />  

            <div className="w-8/12 mt-20 m-auto border-2 flex gap-2 md:w-[100%] md:text-[7px]">

                {/* filter Section */}
                <div>
                    <div>
                        Map
                    </div>

                    <div className="border-2 p-2 font-bold  w-full rounded-t-lg">Filter by:</div>

                    <div className="w-60 border-2 p-2">
                        <h3 className="font-bold">Your Previous Filters</h3>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Guesthouses</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Bed and Breakfasts</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Chalets</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Vacation Homes</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Farm Stays</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Homestays</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Resort Villages</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Country Houses</p>
                        </div>
                    </div>



                    <div className=" w-full border-2 p-2">
                        <h3 className="font-bold">Popular Filters</h3>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Coffee/Tea maker</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Refrigerator</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Pet friendly</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Non-smoking rooms</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Farm Stays</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Homestays</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Resort Villages</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Country Houses</p>
                        </div>
                    </div>
                </div>



                {/* Properties Section */}

                <div className="eknedo">
                  {
                    allData.length>0 && allData.map((val)=>{
                        return(
                          <div className="edidjioj">
                              <div className="edjeoidi">
                            <div className="edoiejdio">

                                <img onClick={onClickImageHandler} className="edjkednjk3n" src={val.images[0]}/>
                            </div>
    
                            <div className="ed3dk3kdk3">
                                <p className="font-normal">Resort</p>
                                <h3 className="font-bold">Zulu Land cottages - near Curlies beach shack and shiva valley - Anjuna beach</h3>
                                <p className="font-normal">Located in Anjuna, a few steps from Anjuna Beach, Zulu Land cottages - near Curlies beach shack and shiva valley - Anjuna beach provides accommodations with a fitness center, free private parking, a...</p>
                            </div>
                        </div>
                          </div>
                        )
                    })
                  }
                </div>
            </div>
        </div>
    )
}

export default HotelCards;