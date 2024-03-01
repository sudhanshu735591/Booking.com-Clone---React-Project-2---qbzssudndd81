

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import FlightCodeArray from "./Constant/FlightStationCode";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute",right:"16px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute",zIndex: "1",left:"-6px"}}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider({arrValue}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const navigate = useNavigate();

  const handleClick = (source, destination)=>{
    navigate('/FlightSearchPage',{state : {source : source, destination: destination}});
  }
  // const [sourceStation, setSourceStation] = useState();



  return (
    <div className="mt-4">
    <Slider {...settings} className="mt-4">
      {
        arrValue.map((i)=>{
          return(<div className="flex flex-col gap-4 cursor-pointer" onClick={()=>handleClick(i.source.station_code, i.destination.station_code)}>
            <div style={{display:"flex", gap:"20px"}}>
              <img src={i.img} className="rounded w-[300px] h-40 sm:mr-5" style={{ marginRight: "20px" }}/>
            </div>
            <h2 className="text-left ml-1 font-semibold">{i.source.station_name} to {i.destination.station_name}</h2>
            <p className="text-left ml-1 text-[12px]">{i.date}</p>
          </div>)
        })
      }
      
    </Slider>
    </div>
  );
}