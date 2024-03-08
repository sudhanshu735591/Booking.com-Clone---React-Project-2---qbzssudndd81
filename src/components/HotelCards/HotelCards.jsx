import { useEffect, useState } from "react";
import "./HotelCards.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import HomePageFooter from "../Footer/HomePageFooter/HomePageFooter";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import CheckBox from "../CheckBox/CheckBox";
import TopNav from "../Navbar/TopNav/TopNav";

function HotelCards() {

    let [searchParams] = useSearchParams();

    const [allData, setAllData] = useState([]);

    const [duplicateData, setDuplicateData] = useState([]);

    const [filterationData, setFilterationData] = useState([]);

    let [inputChange, setInputChange] = useState();

    const [checkBoxCheked, setCheckBoxCheked] = useState(CheckBox);

    const [checkBoxValue, setCheckBoxValue] = useState([]);

    const [addToFavorite, setAddToFavorite] = useState([]);


    const navigate = useNavigate();

    const inputChangeHandler = (data) => {
        setInputChange(data);
    }

    if(!localStorage.getItem("favArray")){
        localStorage.setItem("favArray", JSON.stringify([]));
    }

    const apiData = async () => {
        try {
            const data = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":${searchParams.get("search")}}`, {
                method: "GET",
                headers: {
                    projectID: "0f6ipegajht2",
                }
            })

            const res = await data.json();
            console.log(res?.data);
            setAllData(res?.data?.hotels);
            setDuplicateData(res?.data?.hotels);
            setFilterationData(res?.data?.hotels);
        }
        catch (error) {
            console.error(error)
        }
    }

    

    function checkBoxValueHandler(e, value){
        setDuplicateData(allData);
       
        if(e.target.checked && value==="Child Allowance"){
            const filterData = allData.filter((val)=>{
                return val.childAndExtraBedPolicy.extraBedProvidedForChild===true;
            })
            console.log(filterData);
            setDuplicateData(filterData);
        }


        if(e.target.checked && value==="Guest Allowance"){
            const filterData = allData.filter((val)=>{
                return val.childAndExtraBedPolicy.extraBedForAdditionalGuest===true;
            })
            console.log(filterData);
            setDuplicateData(filterData);
        }

        
    }

    useEffect(()=>{
        if(!inputChange) return;

        let newData = [...allData];

        if(inputChange==="Price (lowest first)" || inputChange==="Property rating (Low to High)"){
            newData.sort((a,b)=>a.avgCostPerNight-b.avgCostPerNight);
        }
    
        else if(inputChange==="Property rating (High to low)"){
            newData.sort((a,b)=>b.avgCostPerNight-a.avgCostPerNight);
        }
    
        else if(inputChange==="Homes and apartment first"){
            newData = allData.filter(val=>val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedProvidedForChild === true);
        }
    
        else if(inputChange==="Top pics for long stays"){
            newData = allData.filter(val=>val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedProvidedForChild === false);
        }


        else if(inputChange==="Best reviwed and lowest price"){
            newData = allData.filter(val=>val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedForAdditionalGuest === true);
        }

        else if(inputChange==="Property rating and price"){
            newData = allData.filter(val=>val.childAndExtraBedPolicy && val.childAndExtraBedPolicy.extraBedForAdditionalGuest === false);
        }

        else if(inputChange==="Distance From DownTown"){
            newData = allData.filter(val=>val.houseRules && val.houseRules.restrictions.petsAllowed === true);
        }

        else if(inputChange==="Top Reviewed"){
            newData = allData.filter(val=>val.houseRules && val.houseRules.restrictions.petsAllowed === false);
        }

        else if(inputChange==="Distance from closest beach"){
            newData = allData.filter(val=>val.houseRules && val.houseRules.restrictions.smokingAllowed === false);
        }

        setDuplicateData(newData);

    },[inputChange])
   

    useEffect(() => {
        apiData();
        // filterDataHandler();
    }, [])

    function handleHeartClick(id, name, location,images, rating, avgCostPerNight, valRating){
    
        const favoriteArray = {_id:id, name:name, location:location, images:images, rating:rating , avgCostPerNight:avgCostPerNight, valRating:valRating};
        const newFavArray = [...JSON.parse(localStorage.getItem("favArray")), favoriteArray];
        setAddToFavorite(newFavArray);

        const uniqueArr = newFavArray.filter((obj, index, self)=>
            index === self.findIndex((t)=>(
                t._id === obj._id 
            ))
        )

        localStorage.setItem("favArray", JSON.stringify(uniqueArr));
        // navigate("/FavoriteList");

    }


    function onClickHandler(id){
        navigate(`/Singleinfo/${id}`)
    }


    function removeItem(id){
        const favArray = JSON.parse(localStorage.getItem("favArray"));
        const updatedFavArray = favArray.filter(val => val._id !== id);
        localStorage.setItem("favArray", JSON.stringify(updatedFavArray));
        window.location.reload();
    }
  

    return (
        <div>
            <div className="ekdmkemd">
            <TopNav/>
            </div>
            
            <div className="w-8/12 mt-20 m-auto flex gap-2 md:w-[100%] md:text-[7px] lg:w-full">
                <div>
                    <div className="border-2 p-2 font-bold  w-full rounded-t-lg">Filter by:</div>

                    <div className="w-60 border-2 p-2">
                        <h3 className="font-bold">Extra Bed Policy</h3>
                        {
                            checkBoxCheked.map((val, index)=>{
                                return(
                                    <div className="flex mt-2 items-center gap-2">
                                        <input 
                                        id={val.id}     
                                        onChange={(e)=> checkBoxValueHandler(e,val.label, index, val.id, val.checked)} 
                                        type="checkbox"
                                        name="bordered-checkbox" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                                        <label for="checkBox">{val.label}</label>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className=" w-full border-2 p-2 edebh">
                        <h3 className="font-bold">Popular Filters</h3>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Coffee/Tea maker</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Refrigerator</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Pet friendly</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Non-smoking rooms</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Farm Stays</p>
                        </div>


                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Homestays</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Resort Villages</p>
                        </div>

                        <div className="flex mt-2 items-center gap-2">
                            <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                            <p className="font-normal">Country Houses</p>
                        </div>
                    </div>
                </div>

                {/* Properties Section */}

                <div className="eknedo">
                    <DropDown inputChangeHandler={inputChangeHandler} />

                    {
                        duplicateData && duplicateData.length > 0 && duplicateData.map((val) => {
                            
                            let randomNumber = Math.floor(Math.random() * 3 + 1);
                            let difference = 3 - randomNumber;
                            let limitedImages = val.rating;
                            let randomRating = parseFloat(((limitedImages * 10) / 6.0)).toFixed(1);

                            return (
                                <div className="edidjioj">
                                    <div className="edjeoidi md:flex md:flex-col">
                                        <div className="edoiejdio">

                                            <Link to={`/Singleinfo/${val._id}`}>
                                                <div className="edjkednjk3n" style={{backgroundImage:`url(${val.images[0]})`, backgroundSize:"cover"}}></div>
                                            </Link>



                                            {
                                                JSON.parse(localStorage.getItem("favArray")).some((value)=>value._id===val._id)?
                                                (
                                                    <>
                                                        <div className="edeidui3 cursor-pointer" onClick={()=>removeItem(val._id)}> 
                                                            <span class="eedba9e88a"><span class="fcd9eec8fb bf9a32efa5" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" height={"17px"} ><path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path></svg></span></span>
                                                        </div>

                                                        <p onClick={()=>navigate("/FavoriteList")} className="text-blue-700 cursor-pointer font-semibold">Go To Favorite</p>
                                                    </>
                                                ):

                                                (
                                                    <div className="edeidui3" onClick={()=>handleHeartClick(val._id, val.name, val.location, val.images[0], randomRating, val.avgCostPerNight, val.rating)}> 
                                                        <span class="eedba9e88a"><span class="fcd9eec8fb bf9a32efa5" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" height={"17px"}><path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path></svg></span></span>
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <div className="ed3dk3kdk3 w-full flex flex-col ">
                                            <div className="flex justify-between">
                                                <div className="flex">
                                                    <p className="fedjnejd">{val.name}</p>
                                                    {
                                                        Array.from({ length: limitedImages }, (_, index) => {
                                                            return (
                                                                <img key={index} className="edjne" src="https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035178_kjB04e6Myv95x9YukX6ie8ynaaaY7i0L.jpg" />
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <div className="flex gap-2">
                                                    <div>
                                                        <div className="ediedie">
                                                            {randomRating <= 6 && <p>Average</p> || randomRating > 6 && randomRating <= 7 && <p>Good</p> || randomRating > 7 && randomRating <= 8 && <p>Very Good</p> || randomRating > 8 && randomRating <= 10 && <p>Excellent</p>}
                                                        </div>
                                                    </div>
                                                    <div className="eduedui">
                                                        <p>{randomRating}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="edmek mt-1">{val.location}</h3>

                                            <div className="flex mt-2 justify-between">

                                                <div className="flex">
                                                    {
                                                        Array.from({ length: randomNumber }, (_, index) => {
                                                            return (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 50" height={"40px"} width={"28px"} >
                                                                    <path fill={"green"} d="M16.29 19.72c4.22-4.22 8.4-17.56 6.7-19.26S7.95 2.93 3.73 7.16C.67 10.22.62 15.58 3.5 18.98L15.62 6.86c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.57 20.03l-2.14 2.14c-.29.29-.29.77 0 1.06s.77.29 1.06 0l2.34-2.34c3.34 1.88 7.78 1.51 10.46-1.17Z" />
                                                                </svg>
                                                            )
                                                        })
                                                    }

                                                    {
                                                        Array.from({ length: difference }, (_, index) => {
                                                            return (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 50" height={"40px"} width={"28px"} >
                                                                    <path fill={"black"} d="M16.29 19.72c4.22-4.22 8.4-17.56 6.7-19.26S7.95 2.93 3.73 7.16C.67 10.22.62 15.58 3.5 18.98L15.62 6.86c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.57 20.03l-2.14 2.14c-.29.29-.29.77 0 1.06s.77.29 1.06 0l2.34-2.34c3.34 1.88 7.78 1.51 10.46-1.17Z" />
                                                                </svg>
                                                            )
                                                        })
                                                    }

                                                    <p className="edjneid ms-2 ">Travel Sustainable Level {randomNumber}</p>
                                                </div>

                                                <p className="eiduuied">₹ {Math.floor(val.avgCostPerNight)}</p>

                                            </div>

                                            <p className="font-normal jdeeijdi">Located 820 feet from the new Digha sea beach, this OYO hotel is equipped with an in-house restaurant and free breakfast is served to the guests. </p>

                                            <div className="mt-3 flex justify-end">
                                                <Button onClick = {()=>onClickHandler(val._id)} className="eheuene" text="See Availability"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <HomePageFooter />
        </div>
    )
}

export default HotelCards;









