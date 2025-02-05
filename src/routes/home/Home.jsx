import SuggestionsTopHome from "./suggestions-top-home/SuggestionsTopHome";
import MySpaceSuggestions from "./MySpaceSuggestions";
import ThemeSuggestions from "./theme-suggestions/ThemeSuggestions";
import FameTop from "./FameTop";
import Catalog from "./Catalog";

export default function Home(props){
    return(
        <section id="home">
            <SuggestionsTopHome suggestionsData={props.allData[0]} contentTypeSelected={props.contentTypeSelected} genreSelected={props.genreSelected} />
            { !props.isFiltered && 
                [
                    <MySpaceSuggestions key={1}/>,
                    <ThemeSuggestions backgroundColor="yellow-gradient" title="RIEZ AUX ÉCLATS" type="comedy" contentTypeSelectedValue={props.contentTypeSelectedValue} key={2}/>,
                    <FameTop contentTypeSelectedValue={props.contentTypeSelectedValue} key={3}/>,
                    <ThemeSuggestions backgroundColor="purple-gradient" title="POUR LES CURIEUX" type="suspense" contentTypeSelectedValue={props.contentTypeSelectedValue} key={4}/>
                ]
            }
            <Catalog  suggestionsData={[props.allData[2],props.allData[3],props.allData[4],props.allData[5],props.allData[6]]}/>
        </section>
    )
}