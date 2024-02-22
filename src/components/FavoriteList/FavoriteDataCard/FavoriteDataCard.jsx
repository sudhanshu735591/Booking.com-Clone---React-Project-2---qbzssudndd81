import Button from "../../Button/Button";


function FavoriteDataCard(props) {

    const { image, heading, location, rating, review, menNumber } = props;

    return (
        <div className="border-2 w-[22%] mt-10 ml-20 rounded-xl">
            <div className="border-b-2">
                <div>
                    <img src={image} className="h-[260px] w-full rounded-xl" />
                    <div  className="edjne w-[20px] relative left-[72%] bottom-[247px]">
                        <svg className="edjne w-[20px] relative left-[84%] bottom" width="128" height="20" viewBox="0 0 128 128" class="bk-icon -iconset-close_circle"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm22.2 69.8a6 6 0 1 1-8.4 8.4L64 72.5 50.2 86.2a6 6 0 0 1-8.4-8.4L55.5 64 41.8 50.2a6 6 0 0 1 8.4-8.4L64 55.5l13.8-13.7a6 6 0 0 1 8.4 8.4L72.5 64z"></path></svg>
                    </div>
                </div>

                <div className="w-fit m-auto ">
                    <div>
                        <h1 className="text-indigo-500 font-normal">{heading}</h1>
                    </div>
                    <div>star</div>
                </div>
            </div>

            <div className="border-b-2 p-4 flex items-center">
                <div>
                    <svg width="22" height="12" viewBox="0 0 128 128" class="bk-icon -iconset-geo_pin"><path d="M98.5 42.5a34.5 34.5 0 1 0-64.3 17.2L64 120l29.8-60.3a34.2 34.2 0 0 0 4.7-17.2zM64 59.7a17.2 17.2 0 1 1 17-17 17.2 17.2 0 0 1-17 17z"></path></svg>
                </div>
                <div>{location}</div>
            </div>

            <div className="border-b-2 p-4 flex gap-2 items-center">
                <div className="border-2 w-fit p-1 bg-indigo-900 text-white rounded-lg">{rating}.2</div>
                <div>
                    <div>{review}</div>
                    <div></div>
                </div>
            </div>


            <div className="border-b-2 p-4 flex gap-2 items-end flex-col">
                <div>{menNumber}</div>
                <div className="font-normal text-lg">₹ 14,519</div>
            </div>

            <div className="border-b-2 p-4">
                <Button text="View property" className="bg-blue-600 w-full text-white p-2 rounded-lg"/>
            </div>
        </div>
    )
}

export default FavoriteDataCard;