import { useNavigate } from "react-router";
import Button from "../Button/Button";
import TopNav from "../Navbar/TopNav/TopNav";
import { useEffect, useState } from "react";



function RegisterPage(){

    const navigate = useNavigate();

    function handleExistAccount(){
        navigate("/sign_in_page");
    }


    const [userName, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [successText, setSuccessText] = useState();

    


    const registerApi = async()=>{
        try{
            if(userName && email && password){
                let data = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/signup",{
                    method:"POST",
                    headers:{
                        projectID:"0f6ipegajht2",
                        'Content-Type': 'application/json'
                    },
    
                    body: JSON.stringify({
                        name:userName,
                        email:email,
                        password:password,
                        appType:"bookingportals",
                    })
                });
        
                let res = await data.json();
                console.log("RES",res);

                if(res?.message){
                    setSuccessText(res?.message);
                }
                else{
                    setSuccessText("Register Successful");
                    setTimeout(()=>{
                        navigate("/sign_in_page");
                    },2000);
                }
                
                setUsername("");
                setPassword("");
                setEmail("");
            }
        }

        catch(error){
            console.error(error);
        }
    }

   
    return(
        <div>  
            <div className="bg-blue-800 p-3">
                <TopNav/>
            </div>

            <div className="text-center flex flex-col w-[50%] m-auto">
                <div className="p-5 w-[60%] m-auto flex flex-col gap-4 items-start ">
                    <p className="text-xl">Create an account</p>

                    <div className="flex flex-col gap-1 items-start w-[100%]">
                        <label className="text-lg " for="username">User Name: </label>
                        <input onChange={(e)=>setUsername(e.target.value)} className="border-2 rounded w-[100%] p-1" type="text" placeholder="Enter Username"/>

                        <label className="text-lg " for="username">Email: </label>
                        <input onChange={(e)=>setEmail(e.target.value)} className="border-2 rounded w-[100%] p-1" type="email" placeholder="Enter Email"/>

                        <label className="text-lg " for="username">Password: </label>
                        <input onChange={(e)=>setPassword(e.target.value)} className="border-2 rounded w-[100%] p-1" type="password" placeholder="Enter Password"/>

                        <Button onClick={registerApi} text = "Submit" className="bg-blue-800 w-[100%] text-white rounded-xl p-2 mt-5"/>
                        <p className="font-normal">Already Account? <span onClick={handleExistAccount} className="text-blue-700 cursor-pointer underline">Sign-in</span></p>
                        {successText && <p className="text-red-600 font-normal text-lg m-auto">{successText} !!</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RegisterPage;