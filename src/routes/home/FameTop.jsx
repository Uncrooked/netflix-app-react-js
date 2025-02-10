import TopPosterList from "../../commons/views/templates/lists/fame-top-list/TopPosterList";

//css
import "./FameTop.css";

export default function FameTop(){

    return(
        <section id="fame-top">
            <h2>TOP 10</h2>
            <TopPosterList title="Top 10 des films d’aujourd’hui : France" isShowValue={true} contentType={"movies"}/>
            <TopPosterList title="Top 10 des séries d’aujourd’hui : France" isShowValue={true} contentType={"series"}/>
        </section>
    )
}