
import BedAvailability from "../BedAvailability/BedAvailability";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import HomePageFooter from "../Footer/HomePageFooter/HomePageFooter";
import HotelFacilities from "../HotelFacilities/HotelFacilities";
import Flight from "../Navbar/BottomNav/Stays/Stays/Flight/Flight";
import Stays from "../Navbar/BottomNav/Stays/Stays/Stays";
import TopNav from "../Navbar/TopNav/TopNav";
import ResidenceDetails from "../ResidenceDetails/ResidenceDetails";
import SearchCard from "../SearchCard/SearchCard";
import "./SingleInfo.css";

function SingleInfo() {
    return (
        <div className="">
            <div className="bg-blue-800 p-3" >
                <TopNav />
                <div className="flex gap-3 m-auto ed3ui">
                    <Stays />
                    <Flight />
                    {localStorage.getItem("Token") && <FavoriteButton/>}
                </div>
            </div>

            <div className="flex mt-5 gap-10 justify-center lg:flex-col">
                <div className="w-[25%] lg:w-full lg:p-3">
                    <SearchCard />
                </div>

                <div className="flex justify-center">
                    <ResidenceDetails /> 
                </div>
            </div>

            <div>
                <BedAvailability/>
            </div>

            <div>
                <HotelFacilities/> 
            </div>

            <div>
                <HomePageFooter/>
            </div>
        </div>
    )
}

export default SingleInfo;