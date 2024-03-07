import Destinations from "../Card/Destination";
import DestDetails from "../Card/DestinationDetails";
import HomePageFooter from "../Footer/HomePageFooter/HomePageFooter";
import Offers from "../Offers/Offers";
import TrendingDestination from "../TrendsDestination/TrendsDestination";
import Navbar from "../Navbar/navbar";

function Home(){

    return(
        <div>
            <Navbar/>
            <Offers/>
            <TrendingDestination/>
            <Destinations heading = "Explore India" para ="These popular destinations have a lot to offer" DestDetails={DestDetails} edi393idj="edi393idj"/>
            <HomePageFooter/>
        </div>
    )
}

export default Home;