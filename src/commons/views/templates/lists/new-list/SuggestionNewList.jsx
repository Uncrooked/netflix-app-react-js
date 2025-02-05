import SuggestionNew from "./SuggestionNew";
import Loading from "../../../components/loadings/Loading";

import "./SuggestionNewList.css";

export default function SuggestionNewList(props){
    let dataRender = false;

    if(props.suggestionsData){
        dataRender = props.suggestionsData.map((param) => 
            <li className="suggestion-new" key={param.id}>
                <SuggestionNew color={props.color} pathImg={param.poster_path ? param.poster_path : param.backdrop_path} desc={param.overview} title={param.title ? param.title : param.name} labelTag={props.labelTag}/>
            </li>
        )
    }
    return(
        <ul id="suggestion-new-list">
            {dataRender ? dataRender : <Loading />}
        </ul>
    )
}