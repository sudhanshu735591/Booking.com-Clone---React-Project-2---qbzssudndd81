import Button from "../Button/Button";
import Flight from "./BottomNav/Stays/Stays/Flight/Flight";
import Stays from "./BottomNav/Stays/Stays/Stays";
import Calender from "./Calender/Calender";
import FormData from "./FormData/FormData";
import "./Navbar.css";
import TopNav from "./TopNav/TopNav";

function Navbar(){

    return(
        <div className="wjdnjnd33">
           <TopNav/>

           <div className="deidie09e">
            <Stays/>
            <Flight/>
           </div>
         

            <div className="edjned889">
                <div className="edje889">Find your next stay</div>
                <div className="ghge43wdxfc">Search deals on hotels, homes, and much more...</div>
            </div>


            <div className="heroBannerSearchBox">
              <FormData/>
            </div>

            <div className="calender"></div>


        </div>
    )
}  

export default Navbar; 