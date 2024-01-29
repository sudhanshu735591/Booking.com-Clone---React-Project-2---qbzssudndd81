import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import data from "./OfferArray";
import "./Offers.css";
import { useNavigate } from "react-router";

function Offers(){
    const navigate = useNavigate();

    const containRef = useRef(null);

    const [visibleItems, setVisibleItems] = useState(3);

    function LeftCaraousel(){
        setVisibleItems((prevVisibleItems) => Math.max(3, prevVisibleItems - 1));
        console.log("Left Carousel Clicked", visibleItems);

    }


    function handleRightCarousel() {
        setVisibleItems((prevVisibleItems) =>
        Math.min(prevVisibleItems + 2)
        );
        
        console.log("rigth Carousel Clicked",visibleItems);
    }



    function StayButtonHandler(){
        navigate("/findStayPage");
    }


 


    return(
        <div className="offerSection">
            
            <div className="offer_iee8938">
                <div className="edjn82992820">Offers</div>

                <div className="djniu298">Promotions, deals, and special offers for you</div>

                <div onClick={LeftCaraousel} className="ednej99 leftArrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M8.91289 19.2361C9.03226 19.2367 9.15054 19.2134 9.2608 19.1676C9.37105 19.1219 9.47105 19.0546 9.55493 18.9696L15.612 12.9125C15.7367 12.7891 15.8353 12.6418 15.9018 12.4795C15.9684 12.3172 16.0017 12.1431 15.9997 11.9676C16.0075 11.6171 15.877 11.2776 15.6362 11.0227L9.57916 4.96566C9.40881 4.79552 9.17788 4.69995 8.93711 4.69995C8.69634 4.69995 8.46542 4.79552 8.29506 4.96566C8.20935 5.04918 8.14122 5.14902 8.09471 5.25929C8.04819 5.36957 8.02423 5.48803 8.02423 5.60771C8.02423 5.72739 8.04819 5.84586 8.09471 5.95613C8.14122 6.0664 8.20935 6.16624 8.29506 6.24976L13.9887 11.9676L8.27084 17.6855C8.18512 17.769 8.117 17.8689 8.07048 17.9792C8.02396 18.0894 8 18.2079 8 18.3276C8 18.4473 8.02396 18.5657 8.07048 18.676C8.117 18.7863 8.18512 18.8861 8.27084 18.9696C8.3543 19.0551 8.45423 19.1228 8.56458 19.1686C8.67493 19.2144 8.79341 19.2374 8.91289 19.2361Z"></path></svg>
                </div>

                <div onClick={handleRightCarousel} className="ednej99 rightArrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M8.91289 19.2361C9.03226 19.2367 9.15054 19.2134 9.2608 19.1676C9.37105 19.1219 9.47105 19.0546 9.55493 18.9696L15.612 12.9125C15.7367 12.7891 15.8353 12.6418 15.9018 12.4795C15.9684 12.3172 16.0017 12.1431 15.9997 11.9676C16.0075 11.6171 15.877 11.2776 15.6362 11.0227L9.57916 4.96566C9.40881 4.79552 9.17788 4.69995 8.93711 4.69995C8.69634 4.69995 8.46542 4.79552 8.29506 4.96566C8.20935 5.04918 8.14122 5.14902 8.09471 5.25929C8.04819 5.36957 8.02423 5.48803 8.02423 5.60771C8.02423 5.72739 8.04819 5.84586 8.09471 5.95613C8.14122 6.0664 8.20935 6.16624 8.29506 6.24976L13.9887 11.9676L8.27084 17.6855C8.18512 17.769 8.117 17.8689 8.07048 17.9792C8.02396 18.0894 8 18.2079 8 18.3276C8 18.4473 8.02396 18.5657 8.07048 18.676C8.117 18.7863 8.18512 18.8861 8.27084 18.9696C8.3543 19.0551 8.45423 19.1228 8.56458 19.1686C8.67493 19.2144 8.79341 19.2374 8.91289 19.2361Z"></path></svg>
            </div>  

                <div ref={containRef} className="dj3ei398">
                    {
                            data.slice(0, visibleItems).map((val)=>{
                                return(
                                    <div className="wsi2u9e93">
                                    <div className="wsi209">
                                    <div className="wuiwu29829">
                                        <h1>{val.h1}</h1>
                                        <p>{val.p}</p>
                                        <Button onClick = {StayButtonHandler} className="eddmed03" text = {val.buttonText}/>
                                    </div>
            
            
                                    <div className="wsmwo3">
                                        <div className="img">
                                            <img  src={val.img}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
              </div>
            </div>
        </div>
    )
}


export default Offers;