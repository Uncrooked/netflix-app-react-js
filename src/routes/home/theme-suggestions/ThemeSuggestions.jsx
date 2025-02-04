import SuggestionsList from "../../../commons/views/templates/lists/suggestions-list/SuggestionsList";

//react
import { useEffect,useState } from "react";

//functions
import { getData } from "../../../commons/functions/requests";

//css
import "./ThemeSuggestions.css";

export default function WeatherSuggestions(props){
    const [dataThemeSuggestion,setDataThemeSuggestion] = useState([]);

    useEffect(() => {
            const genre = props.type == "comedy" ? 35 : 9648;
            const args = {
                contentType:{current:"movie"},
                genre:{current:genre},
                pages:{current:1}
            }
            getData(args,setDataThemeSuggestion);
    },[]);

    return(
        <section id="theme-suggestions" className={props.backgroundColor}>
            <div className="top">
                <h2>{props.title}</h2>
            </div>

            <SuggestionsList noTitle={true} suggestionsData={dataThemeSuggestion}/>
        </section>
    )
}