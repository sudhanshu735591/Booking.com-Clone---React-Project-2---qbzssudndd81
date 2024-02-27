import { useNavigate } from "react-router";
import "./Flight.css"

function Flight(){

    const navigate = useNavigate();


    function handleClick(){
        navigate("/FlightSection");
    }
    


    return(
        <div className="edjen98383">
        <ul className="euheud98899">
            <li className="idj39">
                <span className="staysSpan" onClick={handleClick}>Flights</span>
            </li>
        </ul>
    </div>
    )
    
}

export default Flight;