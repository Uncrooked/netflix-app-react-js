import TopPosterContainer from "./TopPosterContainer";
import Loading from "../../../components/loadings/Loading";

import "./TopPosterList.css";

import { useEffect, useState } from "react";

import { getData } from "../../../../functions/requests";

export default function TopPosterList(props){

    const [dataToGet,setDataToGet] = useState([]);
    let topArrayRender = [];

    useEffect(() => {
        const contentType = props.contentType == "movies" ? "movie":"tv";
        const args = {
            contentType:{current : contentType},
            genre:{current : 37},
            pages:{current:1}
        }
        getData(args,setDataToGet,10);
    },[props.contentType])

    if(dataToGet.length > 0){
        topArrayRender = dataToGet.map((param,index) => 
            <li key={param.id}>
                <TopPosterContainer positionTop={index + 1} posterData={param} />
            </li>
        )
    }


    return(
        <div className={"top-poster-list-container " + (!props.isShowValue && "display-none")}>
            <h3>{props.title}</h3>
            <ul className="top-poster-list">
                {
                    topArrayRender.length > 0 && topArrayRender.length <= 10 ? 
                    topArrayRender 
                    : <Loading />
                }
            </ul>
        </div>
    )
}