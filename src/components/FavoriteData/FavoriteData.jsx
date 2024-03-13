import { useEffect, useState } from "react";
import TopNav from "../Navbar/TopNav/TopNav";

function FavoriteData(){

    const [data, setData]  = useState();

    const [duplicateData, setDuplicateData] = useState();

    const [hotelCount, setHotelCount] = useState(0);

    const [flightCount, setFlightCount] = useState(0);

    const fetchData = async ()=>{
        let data = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                projectID:"0f6ipegajht2",
            }
        });

        let res = await data.json();

        setData(res?.data);
        setDuplicateData(res?.data);
    }

    useEffect(()=>{
        fetchData();
    },[]);



    function filterData(e){
        setData(data);
    

        if(e.target.innerText==="Flight"){
            setFlightCount(flightCount+1);

            if(flightCount<1){
                const filteredData = duplicateData && duplicateData.filter((val)=>{
                    console.log("value is", val.booking_type);
                    if(val.booking_type==="flight"){
                        return val;
                    }
                })
                
                {filteredData && setData(filteredData)}
            }

            else{
                setData(duplicateData);
            }
        }

        if(e.target.innerText==="Hotel"){
            setHotelCount(hotelCount+1);

            if(hotelCount<1){
                const filteredData = duplicateData && duplicateData.filter((val)=>{
                    console.log("value is", val.booking_type);
                    if(val.booking_type==="hotel"){
                        return val;
                    }
                })
                {filteredData && setData(filteredData)}
            }

            else{
                setData(duplicateData);
            }
        }
    }

    return( 
        <div>
            <div className="bg-blue-800 p-3">
                <TopNav/>
            </div>

            <div className="flex gap-10">
                <button onClick={filterData} className="border-2 bg-blue-800 text-white p-3" type="submit">Hotel</button>
                <button onClick={filterData} className="border-2 bg-blue-800 text-white p-3" type="submit">Flight</button>
            </div>

           {
            data && data.map((val)=>{
                return(
                    <div style={{border:"2px solid"}} className="w-[50%] m-auto mt-10 pl-10 pt-4 pb-4 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <p><span>Type:</span><span style={{color:"red", textTransform:"uppercase"}}> {val.booking_type}</span></p>
                        <p>Created at: {val.created_at}</p>
                        <p>Start Date: {val.start_date}</p>
                        <p>End Date: {val.end_date}</p>
                        <p>Hotel Name: {val.hotel?.name}</p>
                        <p><span>Status:</span> <span className="text-red-800" style={{textTransform:"uppercase"}}>{val.status}</span></p>
                    </div>
                </div>
                )
            })
           }
        </div>
    )
}

export default FavoriteData;