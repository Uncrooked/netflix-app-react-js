import TimeBar from "./TimeBar";

import "./Time.css";

export default function TimeContainer(){
    return(
        <div className="time-container">
            <TimeBar />
            <p>3 sur 39 min</p>
        </div>
    )
}