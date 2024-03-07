import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useNavigate } from "react-router";


function FavoriteDataCard(props) {

    const { image, heading, location, rating, review, menNumber } = props;


    const [data, setData] = useState();

    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem("favArray")) {
            setData(JSON.parse(localStorage.getItem("favArray")));
        }
        console.log("data", JSON.parse(localStorage.getItem("favArray")));
    }, [data]);


    function removeDataHanlder(id){
        const favArray = JSON.parse(localStorage.getItem("favArray"));
        const updatedFavArray = favArray.filter(val => val._id !== id);
        localStorage.setItem("favArray", JSON.stringify(updatedFavArray));
        setData(updatedFavArray);
    }


    return (
        <div className="flex border-3 flex-wrap justify-center">
            {
                data && data.map((val) => {
                 
                    return (
                        <div className="border-2 w-[18%] mt-10 ml-20 rounded-xl">
                            <div className="border-b-2">
                                <div>
                                    <img src={val.images} className="h-[260px] w-full rounded-xl" />
                                    <div onClick={()=>removeDataHanlder(val._id)} className="edjne w-[20px] relative left-[72%] bottom-[247px] cursor-pointer">
                                        <svg className="edjne w-[20px] relative left-[84%] bottom" fill="white" width="128" height="20" viewBox="0 0 128 128" class="bk-icon -iconset-close_circle"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm22.2 69.8a6 6 0 1 1-8.4 8.4L64 72.5 50.2 86.2a6 6 0 0 1-8.4-8.4L55.5 64 41.8 50.2a6 6 0 0 1 8.4-8.4L64 55.5l13.8-13.7a6 6 0 0 1 8.4 8.4L72.5 64z"></path></svg>
                                    </div>
                                </div>

                                <div className="w-fit m-auto ">
                                    <div>
                                        <h1 className="text-indigo-500 font-normal">{val.name}</h1>
                                    </div>
                                    <div className="flex">
                                    {
                                        Array.from({ length: val.valRating }, (_, index) => {
                                            return (
                                                <img key={index} className="edjne" src="https://t4.ftcdn.net/jpg/05/70/03/51/240_F_570035178_kjB04e6Myv95x9YukX6ie8ynaaaY7i0L.jpg" />
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>

                            <div className="border-b-2 p-4 flex items-center">
                                <div>
                                    <svg width="22" height="12" viewBox="0 0 128 128" class="bk-icon -iconset-geo_pin"><path d="M98.5 42.5a34.5 34.5 0 1 0-64.3 17.2L64 120l29.8-60.3a34.2 34.2 0 0 0 4.7-17.2zM64 59.7a17.2 17.2 0 1 1 17-17 17.2 17.2 0 0 1-17 17z"></path></svg>
                                </div>
                                <div>{val.location}</div>
                            </div>

                            <div className="border-b-2 p-4 flex gap-2 items-center">
                                <div className="border-2 w-fit p-1 bg-indigo-900 text-white rounded-lg">{val.rating}</div>
                                <div>
                                    <div>

                                    {val.rating <= 6 && <p>Average</p> || val.rating > 6 && val.rating <= 7 && <p>Good</p> || val.rating > 7 && val.rating <= 8 && <p>Very Good</p> || val.rating > 8 && val.rating <= 10 && <p>Excellent</p>}

                                    </div>
                                    <div></div>
                                </div>
                            </div>


                            <div className="border-b-2 p-4 flex gap-2 items-end flex-col">
                                <div>{menNumber}</div>
                                <div className="font-normal text-lg">₹ {Math.round(val.avgCostPerNight)}</div>
                            </div>

                            <div className="border-b-2 p-4">
                                <Button onClick = {()=>navigate(`/Singleinfo/${val._id}`)} text="View property" className="bg-blue-600 w-full text-white p-2 rounded-lg" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FavoriteDataCard;