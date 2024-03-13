import { useNavigate } from "react-router";

function FavoriteButton(){

    const navigate = useNavigate();

    function handleClick(){
        navigate("/FavoriteData");
    }

    return(
        <div className="edjen98383" onClick={handleClick}>
            <ul className="euheud98899">
                <li className="idj39">
                    <span className="staysSpan">History</span>
                </li>
            </ul>
        </div>
    )
}

export default FavoriteButton;