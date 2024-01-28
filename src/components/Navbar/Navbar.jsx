import { useState } from "react";
import Button from "../Button/Button";
import Flight from "./BottomNav/Stays/Stays/Flight/Flight";
import Stays from "./BottomNav/Stays/Stays/Stays";
import FormData from "./FormData/FormData";
import "./Navbar.css";
import TopNav from "./TopNav/TopNav";
// import Calender from "./Calender/Calender";

function Navbar(){
    const [flag, setFlag] = useState(false);

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
              <FormData flag = {flag} setFlag={setFlag}/>
            </div>

            {flag && <div className="calender">
                <div className="dkjn3ij3">
                    <div className="ediuj3ie38">Calender</div>
                    <div className="edij30e">I'm flexible</div>

                </div>

                <div className="cdkmeod03">
                    <div className="eijeif98">
                        {/* <Calender/> */}
                    </div>

                    <div className="eijeif98">
                    </div>
                </div>
              
            </div>}


        </div>
    )
}  

export default Navbar; 