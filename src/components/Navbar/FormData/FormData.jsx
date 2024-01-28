import { useState } from "react";
import Button from "../../Button/Button";
import "./FormData.css";

function FormData(props){

    const {flag, setFlag} = props;

    return(
        <>
            <form method="submit">
                <div className="edjneidue98">
                    <input type="text" placeholder="Where are you going?"/>
                    <input onClick={()=>setFlag(!flag)} type="text" placeholder="Date"/>
                    <input type="text" placeholder="adult"/>
                    <Button text ="Search" className="FormDataButton"/>
                </div>
            </form>
        </>
    )
}

export default FormData;