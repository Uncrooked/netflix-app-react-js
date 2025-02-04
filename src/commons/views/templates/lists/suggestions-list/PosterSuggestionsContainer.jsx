import Poster from "../../../components/poster/Poster";
import Loading from "../../../components/loadings/Loading";

//css
import "./PosterSuggestionsContainer.css";

export default function PosterSuggestionsContainer(props){

    let allPoster;

    if(props.suggestionsData.length){
        allPoster = props.suggestionsData.map((param,index) => 
            <li>
                <Poster sizeFormat="landscape" pathImg={param.poster_path ? param.poster_path : param.backdrop_path} title={param.title ? param.title : param.name} key={index} serieId={param.name ? param.id : false}/>
            </li>
        );
    }

    return(
        <ul className="poster-suggestions-container">
            {allPoster ? allPoster : <Loading />}
        </ul>
    )
}