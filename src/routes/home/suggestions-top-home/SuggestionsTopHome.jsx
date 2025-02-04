import SuggestionsList from "../../../commons/views/templates/lists/suggestions-list/SuggestionsList";
import Btn from "../../../commons/views/components/btn/Btn";
import FilterTag from "./FilterTag";

//functions
import { getTopFilm } from "../../../functions";

//react
import { useEffect , useState } from "react";

//css
import "./SuggestionsTopHome.css";

export default function SuggestionsTopHome(props){

    const [topFilmSuggestion,setTopFilmSuggestion] = useState([]);
    useEffect(() => {

        getTopFilm(setTopFilmSuggestion);

    }, []);

    let topPosterUrl = false;

    if(topFilmSuggestion.poster_path){
        topPosterUrl = "https://image.tmdb.org/t/p/original" + topFilmSuggestion.poster_path;
    }

    return(
        <section className="suggestions-top-home" >
            <FilterTag />
            <h1>{topFilmSuggestion.title}</h1>
            <p className="desc">{topFilmSuggestion.overview}</p>
            <div className="btn-container outside">
                <Btn iconName="play" iconAlt="Icône regarder netflix" linkPath="#" className="primary">Regarder</Btn>
                <Btn iconName="info" iconAlt="Icône regarder netflix" linkPath="#" className="secondary">Plus d'infos</Btn>
            </div>
            <SuggestionsList title="Nos meilleurs suggestions" suggestionsData={props.suggestionsData}/>
            <div className="after">
                <img src={topPosterUrl ? topPosterUrl : ""} />
            </div>
        </section>
    )
}