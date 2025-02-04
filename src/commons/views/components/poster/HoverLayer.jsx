import RoundBtn from "../btn/RoundBtn";
import TimeContainer from "../time/TimeContainer";

//react
import { useEffect,useState } from "react";

//functions
import { getSerieFirstEp } from "./functions";

//css
import "./HoverLayer.css";

export default function HoverLayer(props){
    const [firstEpName,setFirstEpName] = useState("");

    useEffect(() => {
        if(props.serieId){
            getSerieFirstEp(props.serieId,setFirstEpName);
        }
    },[props.serieId]);
    
    return(
        <div className="hover-layer">
                <div className="btn-container">
                    <div>
                    <RoundBtn iconName="play" importance="primary" />
                        <RoundBtn iconName="heart" importance="secondary" />
                    </div>
                    <RoundBtn iconName="dropdown" importance="secondary" classStyle={"little-icon"}/>
                </div>
                <p><strong>{props.title}</strong></p>
                <p>{firstEpName ? firstEpName : ""}</p>
                <TimeContainer />
            </div>
    )
}