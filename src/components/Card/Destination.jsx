import { NavLink } from "react-router-dom";
import "./Destination.css";

function Destinations(props) {
    const {heading, para, DestDetails, edi393idj} = props;

    
    return (
        <div className="edui3ie">
            <div className="enoo3eji3e90">{heading}</div>
            <div className="edn3iej93">{para}</div>
            <div className={edi393idj}>
                {
                    DestDetails.map((val) => {
                        return (
                            <div className="rounded-lg">
                                <NavLink to = {(`/Hotels?search=${JSON.stringify(val.name)}`)}>
                                    <img 
                                        className="rounded-xl"
                                        src={val.img}
                                        alt="image"
                                    />
                                </NavLink>
                                
                                <div className="pb-5">
                                        <h5 className="font-bold">
                                            {val.name}
                                        </h5>

                                    <div className="flex items-center justify-between">
                                        {val.Properties}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Destinations;