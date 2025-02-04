import PosterSuggestionsContainer from "./PosterSuggestionsContainer"

//css
import "./SuggestionsList.css";

export default function SuggestionsList(props){
    return(
        <div className="suggestions-list-container">
            {!props.noTitle && ( props.titleImportanceThree ? <h3>{props.title}</h3> : <h2>{props.title}</h2> ) }
            
            <PosterSuggestionsContainer suggestionsData={props.suggestionsData || []}/>
        </div>
    )
}