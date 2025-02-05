import Poster from "../../../components/poster/Poster";
import Loading from "../../../components/loadings/Loading";

import "./MyListContainerGrid.css";

export default function MyListContainerGrid(props){
    let suggestionsDataRender = [];

    if(props.suggestionsData){
        suggestionsDataRender = props.suggestionsData.map((param,index) => 
            <li key={param.id}>
                <Poster sizeFormat="landscape" pathImg={param.poster_path ? param.poster_path : param.backdrop_path} title={param.title ? param.title : param.name}/>
            </li>
        )
    }

    return(
        <ul className="my-list-container-grid">
            {
                suggestionsDataRender.length > 0 ? 
                suggestionsDataRender
                : <Loading />
            }
        </ul>
    )
}