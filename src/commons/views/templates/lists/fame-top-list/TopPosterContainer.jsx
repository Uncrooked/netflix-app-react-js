import Poster from "../../../components/poster/Poster";

import "./TopPosterContainer.css";

export default function TopPosterContainer(props){
    return(
        <div className="fame-top-container">
            <p className="position">{props.positionTop}</p>
            <Poster dataContent={props.dataContent} sizeFormat="portrait" pathImg={props.posterData.poster_path ? props.posterData.poster_path : props.posterData.backdrop_path} title={props.posterData.title ? props.posterData.title : props.posterData.name} removeHover={true}/>
        </div>
    )
}