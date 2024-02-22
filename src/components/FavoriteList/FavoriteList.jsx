import { useNavigate } from "react-router";
import Button from "../Button/Button";
import HomePageFooter from "../Footer/HomePageFooter/HomePageFooter";
import Flight from "../Navbar/BottomNav/Stays/Stays/Flight/Flight";
import Stays from "../Navbar/BottomNav/Stays/Stays/Stays";
import TopNav from "../Navbar/TopNav/TopNav";
import "./FavoriteList.css";
import { useState } from "react";
import FavoriteDataCard from "./FavoriteDataCard/FavoriteDataCard";


function FavoriteList() {

    const navigate = useNavigate();

    const [flag, setFlag] = useState(true);

    function homeRedirect(){
        navigate("/");
    }
    return (
        <div>
            <div className="bg-indigo-700 pt-5">
                <div><TopNav /></div>
                <div className="flex gap-2 w-[72%] m-auto ">
                    <Stays />
                    <Flight />
                </div>
            </div>



           {
            !flag && <>
             <div className="m-auto  w-[50%] mt-20 cursor-pointer" onClick={homeRedirect}>
                <div className="flex justify-center">
                    <svg class="bk-icon -iconset-heart_outline list-empty-bui__heart" fill="#003580" is_presentation="true" width="128" height="60" viewBox="0 0 128 128"><path d="M119.5 40.3a29 29 0 0 0-22.8-23.7 33.8 33.8 0 0 0-32.7 13 33.7 33.7 0 0 0-32.7-13A29 29 0 0 0 8.5 40.3c-1.3 7.2-.6 18.8 9.4 33.3A140 140 0 0 0 62 111.5a3.7 3.7 0 0 0 4 0c20.2-12 35-24.8 44.1-38 10-14.4 10.7-26 9.5-33.2zm-55.5 63c-33-20.1-50.8-43-47.7-61.6A20.7 20.7 0 0 1 33 24.3a22.3 22.3 0 0 1 4.5-.4c8.8 0 17.3 5.2 23.2 14.6a4 4 0 0 0 3.4 1.8 4 4 0 0 0 3.4-1.8c6-9.4 14.4-14.6 23.2-14.6a22.3 22.3 0 0 1 4.5.5 20.7 20.7 0 0 1 16.6 17.2c3 18.6-14.8 41.6-47.8 61.7z"></path></svg>
                </div>

                <div className="mt-2 text-center">
                    <div className="font-bold text-lg">Here are 3 Simple step to get your started:</div>
                    <div>1: Search for place to stay</div>
                    <div>2: Tap the heart icon when you find a property you like</div>
                    <div>3: you'll find everything you've saved here</div>
                </div>


                <div className="border-2 rounded border-blue-600 w-[20%] m-auto mt-4 bg-white text-blue-600 text-center p-2">
                    <Button text = "Start searching"/>
                </div>
            </div>
            </>
           }




           {
            flag && <>
            <FavoriteDataCard image = "https://cf.bstatic.com/xdata/images/hotel/square600/360696120.webp?k=7a28a5a0ff5cf9c8005066a823e500ed001d6d4de70f640bf75a8aa962a3202a&o="
            heading = "Holiday enn express Singapore"
            location = "New delhi"
            rating="4"
            review= "Very Good"
            menNumber = "1 Night 2 adults"
            />
            </>
           }

           

            <div className="mt-[15%]">
                <HomePageFooter/>
            </div>
          
        </div>
    )
}



export default FavoriteList;