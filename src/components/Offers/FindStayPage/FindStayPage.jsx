import { useState } from "react";
import Flight from "../../Navbar/BottomNav/Stays/Stays/Flight/Flight";
import Stays from "../../Navbar/BottomNav/Stays/Stays/Stays";
import FormData from "../../Navbar/FormData/FormData";
import TopNav from "../../Navbar/TopNav/TopNav";
import "./FindStayPage.css";

function FindStayPage(){
    const [flag, setFlag] = useState(false);

    return(
        <>        
        <div className="stayPageBox">
            <TopNav/>
            <div className="dj3ii89">
                <Stays/>
                <Flight/>
            </div>
        </div>

        <div className="nw209w">
            <div className="edndi389">
                <div className="sjkwiw">
                    <h1>Extend your trip with a long-term hotel or vacation rental stay</h1>
                    <p>Book an extended stay of 30 nights or more, many of which are at a reduced monthly rate</p>
                </div>

                <div className="uhihh9j0">
                    <FormData flag = {flag} setFlag={setFlag}/>
                </div>
            </div>
        </div>

        <div className="edjnedjed">
            <div className="oo3ii30">
                <div className="djwndiuj2">
                    <h1 className="ecklem33">Discover the world at your own pace</h1>
                    <p className="dkjoi390">Extended stay hotels and monthly stay rentals are perfect for working remote, reuniting with friends and family, or just exploring the world again.</p>
                    <p className="ejdj39">More properties are opening for monthly stays on Booking.com every day, so it’s easier than ever to get away for a while.</p>
                </div>

                <div className="diu2909">
                    <img className="ed3oioe" src="https://q-xx.bstatic.com/psb/capla/static/media/intro.464cd011.jpg"/>
                </div>

            </div>
        </div>


        <div className="neje0">
            <div className="ejdji93">Why book your extended stay with us?</div>

            <div className="djeni90">
                <div className="sjkw2999">
                    <div className="cnoe3030">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.84 0c-.265 0-.528.04-.78.12L6.18 5h-.06a3.27 3.27 0 0 0-1.8 1.21 3.63 3.63 0 0 0-.7 2.11v.83a.69.69 0 0 0 .66.71.69.69 0 0 0 .66-.71v-.81a2.09 2.09 0 0 1 .58-1.45 1.92 1.92 0 0 1 1.39-.61h13.8a1.92 1.92 0 0 1 1.4.61c.373.39.581.91.58 1.45v10.18a2.12 2.12 0 0 1-.58 1.48 2 2 0 0 1-1.4.6h-6.8a.662.662 0 0 0-.63.69.65.65 0 0 0 .63.68h6.8A3.25 3.25 0 0 0 23 21a3.56 3.56 0 0 0 1-2.43V8.34a3.53 3.53 0 0 0-.67-2.07A3.29 3.29 0 0 0 21.58 5V2.85a2.77 2.77 0 0 0-.28-1.27 2.74 2.74 0 0 0-.81-1 2.67 2.67 0 0 0-1.16-.53 2.72 2.72 0 0 0-.49 0V0zM9.91 4.91l8.54-3.48c.126-.04.258-.06.39-.06.09-.01.18-.01.27 0 .217.043.42.14.59.28.179.134.323.309.42.51.099.206.15.432.15.66v2.09H9.91zm9 6.39a2 2 0 0 0-1.12.34 2 2 0 0 0-.85 2.06 2 2 0 0 0 1.57 1.58c.133.015.267.015.4 0a2 2 0 0 0 2-2.01 2.09 2.09 0 0 0-.59-1.42 2 2 0 0 0-1.41-.59v.04zm0 2.9a.91.91 0 0 1-.91-1.06.91.91 0 0 1 .25-.46.86.86 0 0 1 .45-.24h.18a.75.75 0 0 1 .33.07.77.77 0 0 1 .4.33.84.84 0 0 1 .15.49.882.882 0 0 1-.26.63.85.85 0 0 1-.62.26l.03-.02zM6.13 10.86c-3.34 0-6.13 1.5-6.13 3.65v5.84C0 22.5 2.79 24 6.13 24s6.13-1.5 6.13-3.65v-5.84c0-2.15-2.8-3.65-6.13-3.65zm0 5.84c-2.68 0-4.77-1.12-4.77-2.19 0-1.07 2.09-2.19 4.77-2.19 2.68 0 4.76 1.12 4.76 2.19 0 1.07-2.09 2.19-4.76 2.19zm0 1.46a8.3 8.3 0 0 0 4.76-1.31v.58c0 1.07-2.08 2.19-4.76 2.19-2.68 0-4.77-1.12-4.77-2.19v-.58a8.31 8.31 0 0 0 4.77 1.31zm0 2.92a8.3 8.3 0 0 0 4.76-1.31v.58c0 1.07-2.08 2.19-4.76 2.19-2.68 0-4.77-1.12-4.77-2.19v-.58a8.31 8.31 0 0 0 4.77 1.31z"></path></svg>
                    </div>
                    


                    <div className="edi938920">
                        <h1>Save more with long stays</h1>
                    </div>
                    <div className="dn2990qi">
                        <p>Some hotels and vacation rentals on Booking.com now offer reduced monthly rates on extended stays, helping you save more when you stay longer.</p>
                    </div>
                </div>


                <div className="sjkw2999">
                    
                    <div className="edi938920">
                        <h1>Combine work and play</h1>
                    </div>
                    <div className="dn2990qi">
                        <p>Pick a property with everything you need to have a comfortable stay of 30 days or more.</p>
                    </div>
                </div>






                <div className="sjkw2999">
                    <div className="cnoe3030">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 18v3.75A2.25 2.25 0 0 0 5.25 24h4.5a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v6c0 .414.336.75.75.75h4.5A2.25 2.25 0 0 0 21 21.75V18a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 1-.75.75h-4.5l.75.75v-6A2.25 2.25 0 0 0 12.75 15h-1.5A2.25 2.25 0 0 0 9 17.25v6l.75-.75h-4.5a.75.75 0 0 1-.75-.75V18A.75.75 0 0 0 3 18zm-1.72-.97L11.47 6.841a.75.75 0 0 1 1.06 0l10.19 10.19a.75.75 0 1 0 1.06-1.061L13.591 5.78a2.25 2.25 0 0 0-3.182 0L.219 15.97a.75.75 0 1 0 1.061 1.06zm15.97-7.28v-1.5L16.5 9h3.75l-.75-.75v5.25a.75.75 0 0 0 1.5 0V8.25a.75.75 0 0 0-.75-.75H16.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0zM16.522.3l-.407.543a1.793 1.793 0 0 0 .279 2.461c.12.102.14.28.045.406l-.411.548a.75.75 0 1 0 1.2.9l.407-.543a1.793 1.793 0 0 0-.279-2.461.295.295 0 0 1-.045-.406l.411-.548a.75.75 0 1 0-1.2-.9zm3.75 0l-.407.543a1.793 1.793 0 0 0 .279 2.461c.12.102.14.28.045.406l-.411.548a.75.75 0 1 0 1.2.9l.407-.543a1.793 1.793 0 0 0-.279-2.461.295.295 0 0 1-.045-.406l.411-.548a.75.75 0 1 0-1.2-.9z"></path></svg>
                    </div>

                    <div className="edi938920">
                        <h1>Over 1.3 million long stay properties</h1>
                    </div>
                    <div className="dn2990qi">
                        <p>Choose from monthly rentals, hotels, and everything in between. Count on verified guest reviews to pick a place you can call home.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="jnjiu2ji">
            <div className="ecini329w0">Our picks for a long-term stay</div>
            <div className="dni20w92">These hotels and vacation rentals are popular for extended stays</div>

            <div className="dii920">
                <div className="ddn201">
                    <div className="cnwiw029i"></div>
                    <div className="cnowij092i"></div>
                </div>

                <div className="n3e0ie0">
                    <div className="no3jd30"></div>
                    <div className="nd3i092w"></div>
                    <div className="dn20w0"></div>
                    <div className="dn209wi1"></div>
                </div>
            </div>
        </div>
        </>
    )
}


export default FindStayPage;