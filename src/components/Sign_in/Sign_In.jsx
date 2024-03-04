import { useContext, useState } from "react";
import Button from "../Button/Button";
import TopNav from "../Navbar/TopNav/TopNav";
import UserContext from "../ContextApi/userContext";

function SignIn() {

    const {setGlobalLoginCheck} = useContext(UserContext);

    const [email, setEmail] = useState();

    const [password, setPassword] = useState();

    const [successText, setSuccessText] = useState();


    const loginApi = async()=>{
       if(email && password){
        try{
            const data = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/login",{
                method:"POST",
                headers:{
                    projectID:"0f6ipegajht2",
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    password:password,
                    appType: 'bookingportals' 
                })
            })
    
            const res = await data?.json();

            if(res?.status==="success"){
                setGlobalLoginCheck(true);
                localStorage.setItem("Token", res?.token);
                setSuccessText("Login Successful !!");

                setTimeout(()=>{
                    setSuccessText("");
                },3000)
            }

            localStorage.setItem("Name", res?.data?.name);
            setEmail("");
            setPassword("");

        }
        catch(error){
            console.error(error);
        }
       }
    }

    return (
        <>
            <div className="SignInBox bg-blue-800 p-3">
                <TopNav />
            </div>


            <div className="text-center flex flex-col w-[50%] m-auto">
                <div className="p-5 w-[60%] m-auto flex flex-col gap-4 items-start ">
                    <p className="text-xl">Login Please !!</p>

                    <div className="flex flex-col gap-1 items-start w-[100%]">
                        <label className="text-lg " for="email">Email: </label>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border-2 rounded w-[100%] p-1" type="email" placeholder="Enter Email" />

                        <label className="text-lg " for="password">Password: </label>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} className="border-2 rounded w-[100%] p-1" type="password" placeholder="Enter Username" />

                        <Button onClick={loginApi}  text="Submit" className="bg-blue-800 w-[100%] text-white rounded-xl p-2 mt-5" />
                        {successText && <p  value={successText} className="text-red-600 font-normal text-lg m-auto">{successText}</p>}
                    </div>
                </div>
            </div>

        </>


    )
}

export default SignIn;