import { useContext, useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import data from "./OfferArray";
import "./Offers.css";
import { useNavigate } from "react-router";
import MenCountCard from "../MenCountCard/MenCountCard";
import UserContext from "../ContextApi/userContext";

function Offers() {
    
    const navigate = useNavigate();

    const containRef = useRef(null);

    const [visibleItems, setVisibleItems] = useState(3);

    const {handleFlagCard} = useContext(UserContext);


    function StayButtonHandler() {
        navigate("/FlightSection");
    }

   
    return (
        <div className="offerSection w-[68%] lg:w-full lg:pl-5 pr-5">
            {handleFlagCard &&  <div className="edjjijed">
                <MenCountCard/>
            </div>}

            <div className="offer_iee8938 lg:mt-40">
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
                                                <img src={val.img}  className="oejij4uj"/>
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