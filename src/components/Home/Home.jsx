import Destinations from "../Card/Destination";
import DestDetails from "../Card/DestinationDetails";
import HomePageFooter from "../Footer/HomePageFooter/HomePageFooter";
import Offers from "../Offers/Offers";
import TrendingDestination from "../TrendsDestination/TrendsDestination";
import Navbar from "../Navbar/navbar";
// import Navbar from "../navbar/navbar";


function Home(){

    return(
        <div>
            <Navbar/>
            <Offers/>
            {/* <Destinations heading = "Browse by property type" para ="" DestDetails={properties} edi393idj="edi393idj"/> */}

            <TrendingDestination/>
            <Destinations heading = "Explore India" para ="These popular destinations have a lot to offer" DestDetails={DestDetails} edi393idj="edi393idj"/>
            <HomePageFooter/>
        </div>
    )
}

export default Home;