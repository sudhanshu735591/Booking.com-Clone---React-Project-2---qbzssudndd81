import { useNavigate } from "react-router";
import Button from "../../Button/Button";
import "./TopNav.css"
import { useContext, useEffect, useState } from "react";
import UserContext from "../../ContextApi/userContext";

function TopNav(){
    
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);

    function handleSignInButton(){
        navigate("/sign_in_page");
    }


    localStorage.setItem("username", "Sudhanshu")

    function RegisterPage(){
        navigate("/RegisterPage");
    }

    function logOut(){
        localStorage.removeItem("Token");
        setFlag(false);
        window.location.reload();

    }

    // const {globalLoginCheck} = useContext(UserContext);
    

    useEffect(()=>{
        if(localStorage.getItem("Token")){
            setFlag(true);
        }
        else{
            setFlag(false);
        }
    },[localStorage.getItem("Token")]);
    

    return(
        <div>
             <div className="dnjed939">
                <div onClick={()=>navigate("/")} className="ee3r3433 cursor-pointer">Booking.com</div>
                <div className="dicjrif98r8">
                   {!flag ?
                   <>
                    <Button onClick={RegisterPage} className="RegisterButton button" text = "Register"/>
                    <Button onClick = {handleSignInButton} className="SignInButton button" text = "Sign in"/>
                    </>
                    :<div className="text-white text-lg">Hello {localStorage.getItem("username")[0]?.toUpperCase()}{localStorage.getItem("username").slice(1)} !! <span onClick={logOut} className="cursor-pointer">Logout</span>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopNav;