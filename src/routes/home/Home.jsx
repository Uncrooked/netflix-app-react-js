import SuggestionsTopHome from "./suggestions-top-home/SuggestionsTopHome";
import MySpaceSuggestions from "./MySpaceSuggestions";
import ThemeSuggestions from "./theme-suggestions/ThemeSuggestions";
import FameTop from "./FameTop";
import Catalog from "./Catalog";

export default function Home(props){
    return(
        <section id="home">
            <SuggestionsTopHome suggestionsData={props.allData[0]} />
            { !props.isFiltered && 
                [
                    <MySpaceSuggestions />,
                    <ThemeSuggestions backgroundColor="yellow-gradient" title="RIEZ AUX ÉCLATS" type="comedy" contentTypeSelectedValue={props.contentTypeSelectedValue} />,
                    <FameTop contentTypeSelectedValue={props.contentTypeSelectedValue}/>,
                    <ThemeSuggestions backgroundColor="purple-gradient" title="POUR LES CURIEUX" type="suspense" contentTypeSelectedValue={props.contentTypeSelectedValue}  />
                ]
            }
            <Catalog  suggestionsData={[props.allData[2],props.allData[3],props.allData[4],props.allData[5],props.allData[6]]}/>
        </section>
    )
}