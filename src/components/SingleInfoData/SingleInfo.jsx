
import BedAvailability from "../BedAvailability/BedAvailability";
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
            <div className="bg-blue-700 p-3" >
                <TopNav />
                <div className="flex gap-3 m-auto ed3ui">
                    <Stays />
                    <Flight />
                </div>
            </div>

            <div className="ejdnejd">
                <div className="ejded">
                    <SearchCard />
                </div>

                <div>
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