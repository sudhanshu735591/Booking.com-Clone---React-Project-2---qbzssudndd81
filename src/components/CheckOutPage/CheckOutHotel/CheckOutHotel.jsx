import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CheckOutHotel(){

    const {id } = useParams();

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
            console.log("res", res?.data);
            setData(res?.data);
        }

        catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        singleDataApi();
    }, [])


    return(
            <div className="border-2 rounded-xl mt-10 p-4 flex flex-col justify-center ">
                {data && <div>{data.name}</div>}
                {data && <div className="font-bold">{data.location}</div>}
                {data && <div className="w-fit">{data.amenities[0]}</div>}

                <div className="w-[90%] flex flex-wrap">
                    <div className="flex mt-3 gap-2 flex-wrap text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 24 24"><path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path></svg>
                        <div>Pet friendly</div>


                        <svg xmlns="http://www.w3.org/2000/svg"  height="17px"  viewBox="0 0 24 24"><path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path></svg>
                        <div >Free WiFi</div>

                        <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 128 128"><path d="M108.42 55.84H44.26a9 9 0 0 0-8.94 8.94v20.67H19.58a9 9 0 0 0-8.93 8.94v14.8a9 9 0 0 0 8.93 8.94h6.47c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h22.8c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h1.53c7.658-.006 13.864-6.212 13.87-13.87V64.78a9 9 0 0 0-8.93-8.94zm.93 8.94v20.67H92.68V63.84h15.74a.94.94 0 0 1 .93.94zM68 85.45V63.84h16.68v21.61zM44.26 63.84H60v21.61H43.32V64.78c0-.52.42-.94.94-.94zM39.32 120a5.87 5.87 0 1 1 5.87-5.87 5.88 5.88 0 0 1-5.87 5.87zm49.36 0a5.87 5.87 0 1 1 5.87-5.87 5.87 5.87 0 0 1-5.87 5.87zm14.8-9.87H102c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291H52.6c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291h-6.47a.94.94 0 0 1-.93-.94v-14.8a.94.94 0 0 1 .93-.94h89.77v10.81a5.87 5.87 0 0 1-5.87 5.87zm-92.29-82a4 4 0 0 1 5.467-1.451l.003.001 6.69 3.88 12.33-6-13.79-8a4 4 0 0 1 4-6.91l18.4 10.73 13.07-6.4a4.003 4.003 0 1 1 3.52 7.19l-36 17.6a4 4 0 0 1-3.76-.13l-8.54-5a4 4 0 0 1-1.39-5.52z"></path></svg>
                        <div>Airport shuttle</div>

                        <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 24 24"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path></svg>
                        <div>Parking</div>

                        <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 24 24"><path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path></svg>
                        <div>Restaurant</div>


                        <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 24 24"><path d="M23.097 21.71c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm0-4.5c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm-1.722-8.64a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zM7.777 14.636l3.831-2.4a.75.75 0 0 0 .166-1.13L8.964 7.9a2.25 2.25 0 0 1 .687-3.494l4.264-2.135a.751.751 0 1 1 .686 1.333l-.01.006-3.405 1.702a1.502 1.502 0 0 0-.448 2.334l5.375 6.142a.75.75 0 1 0 1.128-.988l-5.377-6.145-.002-.003v-.001l3.394-1.697.027-.013A2.25 2.25 0 0 0 13.238.93L8.98 3.065a3.749 3.749 0 0 0-1.144 5.824l2.81 3.206.166-1.13-3.831 2.4a.75.75 0 0 0 .796 1.272z"></path></svg>
                        <div>Swimming pool</div>
                    </div>
                </div>

            </div>
    )
}


export default CheckOutHotel;