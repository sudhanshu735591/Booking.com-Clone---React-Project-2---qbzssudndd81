import { useNavigate } from "react-router";
import Button from "../../Button/Button";
import "./TopNav.css"

function TopNav(){

    const navigate = useNavigate();

    function handleSignInButton(){
        navigate("/sign_in_page");
    }

    return(
        <div>
             <div className="dnjed939">
                <div className="ee3r3433">Booking.com</div>

                <div className="dicjrif98r8">
                    <Button className="RegisterButton button" text = "Register"/>
                    <Button onClick = {handleSignInButton} className="SignInButton button" text = "Sign in"/>
                </div>
            </div>
        </div>
    )
}

export default TopNav;