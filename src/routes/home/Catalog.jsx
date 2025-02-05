import SuggestionsList from "../../commons/views/templates/lists/suggestions-list/SuggestionsList";

import "./Catalog.css";

export default function Catalog(props){
    return(
        <section id="catalog">
            <h2>NOTRE CATALOGUE</h2>
            <SuggestionsList title="À regarder pour un week-end" titleImportanceThree={true} suggestionsData={props.suggestionsData[0]}/>
            <SuggestionsList title="Grands succès" titleImportanceThree={true} suggestionsData={props.suggestionsData[1]}/>
            <SuggestionsList title="Votre prochain coup de coeur" titleImportanceThree={true} suggestionsData={props.suggestionsData[2]}/>
            <SuggestionsList title="Seulement avec des popcorns" titleImportanceThree={true} suggestionsData={props.suggestionsData[3]}/>
            <SuggestionsList title="À regarder avec ses amis" titleImportanceThree={true} suggestionsData={props.suggestionsData[4]}/>
        </section>
    )
}