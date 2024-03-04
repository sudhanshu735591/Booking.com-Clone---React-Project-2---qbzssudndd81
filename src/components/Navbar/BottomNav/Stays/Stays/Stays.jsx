import { useNavigate } from "react-router";
import "./Stays.css";

function Stays(){

    const navigate = useNavigate();

    function handliClick(){
        navigate("/");
    }
    return(
        <div>
            <ul className="euheud98899">
                <li className="idj39">
                    <span onClick={handliClick} className="staysSpan">Stays</span>
                </li>
            </ul>
        </div>
    )
}

export default Stays;