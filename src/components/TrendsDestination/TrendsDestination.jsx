import trendDest from "../TrendDestObject/TrendDestObj";
import "./TrendingDestination.css";

function TrendingDestination(){

    return(
        <div className="jeni3en">
            <div className="edu3ui">Trending destinations</div>
            <div className="edijeio3">Most popular choices for travelers from India</div>

            <div className="eidjniedu">
                {
                    trendDest.map((val, index)=>{
                        return(
                            index<=1 &&  <div className="ediediu" style={{backgroundImage: `url(${val.img})`}}>
                                <span style={{display:"flex", gap:"10px", alignItems:"center"}}>
                                    <p style={{color:"white", fontSize:"20px"}}> {val.name}</p>
                                    <img style={{height:"20px"}} src={val.flag}/>
                                </span>
                            </div>
                        )
                    })
                }
            </div>



            <div className="edi3u3ji">
                {
                    trendDest.map((val, index)=>{
                        return(
                            index>1 &&  <div className="ejnfnirfif" style={{backgroundImage: `url(${val.img})`}}>
                                <span style={{display:"flex", gap:"10px", alignItems:"center"}}>
                                    <p style={{color:"white", fontSize:"20px"}}> {val.name}</p>
                                    <img style={{height:"20px"}} src={val.flag}/>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TrendingDestination;