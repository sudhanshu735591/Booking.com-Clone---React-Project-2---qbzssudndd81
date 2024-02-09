import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import data from "./OfferArray";
import "./Offers.css";
import { useNavigate } from "react-router";

function Offers() {
    const navigate = useNavigate();

    const containRef = useRef(null);

    const [visibleItems, setVisibleItems] = useState(3);

    // function LeftCaraousel() {
    //     setVisibleItems((prevVisibleItems) => Math.max(3, prevVisibleItems - 1));
    //     console.log("Left Carousel Clicked", visibleItems);

    // }


    // function handleRightCarousel() {
    //     setVisibleItems((prevVisibleItems) =>
    //         Math.min(prevVisibleItems + 2)
    //     );

    //     console.log("rigth Carousel Clicked", visibleItems);
    // }



    function StayButtonHandler() {
        navigate("/FlightSearchPage");
    }

    return (
        <div className="offerSection">

            <div className="offer_iee8938">
                <div className="edjn82992820">Offers</div>

                <div className="djniu298">Promotions, deals, and special offers for you</div>



                <div ref={containRef} className="dj3ei398">
                    {
                        data.slice(0, visibleItems).map((val) => {
                            return (
                                <div className="wsi2u9e93">
                                    <div className="wsi209">
                                        <div className="wuiwu29829">
                                            <h1>{val.h1}</h1>
                                            <p>{val.p}</p>
                                            <Button onClick={StayButtonHandler} className="eddmed03" text={val.buttonText} />
                                        </div>


                                        <div className="wsmwo3">
                                            <div className="img">
                                                <img src={val.img} />
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