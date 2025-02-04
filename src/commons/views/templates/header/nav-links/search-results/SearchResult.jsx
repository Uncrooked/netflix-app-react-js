import PosterLoading from "../../../../components/loadings/PosterLoading";

//react
import { useState } from "react";

//css
import "./SearchResult.css";

export default function SearchResult(props){
    const [isLoaded,setIsLoaded] = useState(false);
    return(
        <a href="#">
            <div className="container-img">
                <img src={props.pathImg ? "https://image.tmdb.org/t/p/w500" + props.pathImg : "/img/webp/batman-poster-netflix.webp"} alt="affiche de film" className={isLoaded ? "" : "display-none"} onLoad={() => {setIsLoaded(true)}}/>
                <PosterLoading loaded={isLoaded}/>
            </div>
            <p>{props.title}</p>
        </a>
    );
}