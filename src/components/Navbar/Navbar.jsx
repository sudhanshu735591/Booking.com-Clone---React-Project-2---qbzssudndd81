import { useState } from "react";
import Flight from "./BottomNav/Stays/Stays/Flight/Flight";
import Stays from "./BottomNav/Stays/Stays/Stays";
import FormData from "./FormData/FormData";
import "./Navbar.css";
import TopNav from "./TopNav/TopNav";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
// import Calender from "./Calender/Calender";

function Navbar(){
    const [flag, setFlag] = useState(false);

    return(
        <div className="wjdnjnd33">
           <TopNav/>
           <div className="deidie09e">
            <Stays/>
            <Flight/>
            {localStorage.getItem("Token") && <FavoriteButton/>}
           </div>
         

            <div className="edjned889">
                <div className="edje889">Find your next stay</div>
                <div className="ghge43wdxfc">Search deals on hotels, homes, and much more...</div>
            </div>


            <div className="heroBannerSearchBox">
              <FormData flag = {flag} setFlag={setFlag}/>
            </div>
        </div>
    )
}  

export default Navbar; 