import { useState } from "react";
import "./DropDown.css";

function DropDown(){

    let [flag , setFlag] = useState(false);

    function handleClick(){
        setFlag(!flag)
    }

    return(
        <div className="jcnjcnk"  onClick={handleClick}>
            <div className="eiuiued">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={"18px"} data-rtl-flip="true"><path d="M10.28 15.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.78.78 0 0 1-.24.16.73.73 0 0 1-.58 0 .78.78 0 0 1-.24-.16l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.75a.75.75 0 0 1 1.5 0v14.69l3.22-3.22a.75.75 0 0 1 1.06 0zm13.5-7.5l-4.5-4.5a.78.78 0 0 0-.28-.16.73.73 0 0 0-.58 0 .78.78 0 0 0-.24.16l-4.5 4.5a.75.75 0 1 0 1.06 1.06L18 5.56v14.69a.75.75 0 0 0 1.5 0V5.56l3.22 3.22a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"></path></svg>
                <div>Sort by: Top pics for long stays</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  height={"18px"}><path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"></path></svg>
            </div>

            {
                flag && <div className="edhhd mt-3">
                <div className="ddcii">Top pics for long stays</div>
                <div className="ddcii">Homes and apartment first</div>
                <div className="ddcii">Price (lowest first)</div>
                <div className="ddcii">Best reviwed and lowest price</div>
                <div className="ddcii">Property rating (High to low)</div>
                <div className="ddcii">Property rating (High to low)</div>
                <div className="ddcii">Property rating and price</div>
                <div className="ddcii">Distance From DownTown</div>
                <div className="ddcii">Top Reviewed</div>
                <div className="ddcii">Distance from closest beach</div>
            </div>
            }
           
        </div>
    )
}


export default DropDown;