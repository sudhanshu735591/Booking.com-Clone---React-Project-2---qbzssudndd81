import { useEffect, useState } from "react";
import { useParams } from "react-router";


function PriceDetails() {
    const { id } = useParams();
    const [data, setData] = useState();

    const singleDataApi = async () => {
        try {
            let data = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`, {
                method: "GET",
                headers: {
                    projectID: "0f6ipegajht2"
                }
            });
            let res = await data?.json();
            console.log("res", res?.data.avgCostPerNight);
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
        <div className="border-2  p-3 rounded-xl">
            <h1>Your price summary</h1>

            <div className="w-full justify flex flex-col justify-between">
                <div className="flex justify-between mt-4">
                    <div>Original price</div>
                    {data && <div>₹ {data.avgCostPerNight.toFixed(2)}</div>}
                </div>


                <div className="flex justify-between mt-4">
                    <div className="w-[80%]">
                        <div>Early 2024 Deal</div>
                        <div className="w-[80%]">
                            <div className="text-sm">This property is offering a discount on stays between January 1 and April 1, 2024</div>
                        </div>
                    </div>
                    <div>- ₹ 384.55</div>
                </div>


                <div className="flex justify-between mt-4">
                    <div className="w-[80%]">
                        <div>Genius Discount</div>
                        <div className="w-[80%]">
                            <div className="text-sm">You’re getting a reduced rate because you’re a Genius member.</div>
                        </div>
                    </div>
                    <div>- ₹ 170.91</div>
                </div>
            </div>


            <div className="border-2 pt-10 p-3 bg-blue-200 pb-10 mt-4 flex justify-between">
                <h1>Price</h1>
                {data && <h1>₹ {data.avgCostPerNight.toFixed(2)-384.55-170.91}</h1>}
            </div>
        </div>
    )
}



export default PriceDetails;