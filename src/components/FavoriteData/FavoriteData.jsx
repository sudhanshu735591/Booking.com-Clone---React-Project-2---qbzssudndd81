import { useEffect, useState } from "react";
import TopNav from "../Navbar/TopNav/TopNav";


function FavoriteData(){

    const [data, setData]  = useState();

    const fetchData = async ()=>{
        let data = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                projectID:"0f6ipegajht2",
            }
        });

        let res = await data.json();

        console.log(res);

        setData(res?.data);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div>
            <div className="bg-blue-800 p-3">
                <TopNav/>
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
                        <p>Hotel Name: {val.hotel.name}</p>
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