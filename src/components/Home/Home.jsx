import HomePageFooter from "../Footer/HomePageFooter/HomePageFooter";
import Calender from "../Navbar/Calender/Calender";
import Navbar from "../Navbar/Navbar";
import Offers from "../Offers/Offers";


function Home(){
    return(
        <div>
            <Navbar/>
            <Offers/>
            <HomePageFooter/>
        </div>
    )
}

export default Home;