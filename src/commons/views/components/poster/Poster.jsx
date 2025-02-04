import { useState } from "react";
import PosterLoading from "../loadings/PosterLoading";

import HoverLayer from "./HoverLayer";

import "./Poster.css";

export default function Poster(props){
    const [isLoad,setIsLoad] = useState(false);

    const newPath = props.pathImg ? "https://image.tmdb.org/t/p/w342" + props.pathImg : "/img/webp/batman-poster-netflix.webp";
    const newAlt = props.title ? "affiche du film " + props.title + " sur netflix" : "Titre non trouvé"; 

    return(
        <div className={"poster-suggestion " + props.sizeFormat}>
            <img src={newPath} alt={newAlt} className={!isLoad && "display-none"} onLoad={() => {setIsLoad(true)}}/>
            <PosterLoading loaded={isLoad}/>
            {!props.removeHover && <HoverLayer title={props.title} serieId={props.serieId || false}/>}
        </div>
    )
}