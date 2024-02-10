import Destinations from "../Card/Destination";
import DestDetails from "../Card/DestinationDetails";
import HomePageFooter from "../Footer/HomePageFooter/HomePageFooter";
import Navbar from "../Navbar/Navbar";
import Offers from "../Offers/Offers";
import TrendingDestination from "../TrendsDestination/TrendsDestination";

import properties from "../PropertiesDetails/Property";

function Home(){

    return(
        <div>
            <Navbar/>
            <Offers/>
            <Destinations heading = "Browse by property type" para ="" DestDetails={properties} edi393idj="edi393idj"/>

            <TrendingDestination/>
            <Destinations heading = "Explore India" para ="These popular destinations have a lot to offer" DestDetails={DestDetails} edi393idj="edi393idj"/>
            <HomePageFooter/>
        </div>
    )
}

export default Home;