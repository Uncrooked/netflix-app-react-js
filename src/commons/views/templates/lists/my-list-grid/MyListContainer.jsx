import MyListContainerGrid from "./MylistContainerGrid";

//react
import { useState } from "react";

//functions
import { developList } from "./functions";

//css
import "./MyListContainer.css";

export default function MyListContainer(props){

    const [showMore, setShowMore] = useState(false);

    return(
        <div className="my-list-container">
            <div className="top">
                <h2 data-value={props.value.value} >{props.value.name}</h2>
                <img src="/public/assets/img/svg/dropdown-icon.svg" alt="icône faire développer" className={(showMore ? "less" : "more") + " develop"} onClick={(e) => {developList(e,showMore,setShowMore)}} />
            </div>
            
            <MyListContainerGrid suggestionsData={props.suggestionsData} />
        </div>
    )
}