import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./BedAvailability.css";
import { useNavigate, useParams } from "react-router";
import UserContext from "../ContextApi/userContext";

function BedAvailability() {
    const { id } = useParams();

    const [data, setData] = useState();

    const {adultCount} = useContext(UserContext);

    const {childrenCount} = useContext(UserContext);

    const navigate = useNavigate();

    function handleClick(){
        navigate("/FormDetails");
    }

    const singleDataApi = async () => {
        try {
            let data = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`, {
                method: "GET",
                headers: {
                    projectID: "0f6ipegajht2",
                }
            });
            let res = await data?.json();
            console.log("resp", res?.data);
            setData(res?.data);
        }

        catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        singleDataApi();
    }, [])

    return (
        <div className="jnjrnf ">
            <div className="font-bold">Availability</div>

            <table className="w-full">
                <thead className="ediediei">
                    <tr>
                        <th>Room Type</th>
                        <th>Number of guests</th>
                        <th>Price for 15 days</th>
                        <th>Your Choices</th>
                        <th>button</th>
                    </tr>
                </thead>


                {data && data.rooms.map((val) => {
                    return (
                        <tr className="edeuid">
                            <td className="dji3jo">
                                <p className="jnjnj">{val.roomType} Bed</p>
                                <p className="font-normal text-sm">{val.bedDetail}</p>
                            </td>

                            <td className="dji3jo">{adultCount+childrenCount}</td>
                            <td className="dji3jo">
                                <p>₹ {Math.floor(val.costPerNight)}</p>
                            </td>

                            <td className="dji3jo">
                                <p className="font-normal text-red-500">₹ {(val.cancellationPolicy)}</p>
                            </td>
                            <td onClick={handleClick}>click</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default BedAvailability;