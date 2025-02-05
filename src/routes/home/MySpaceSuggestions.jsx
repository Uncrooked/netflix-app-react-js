import SuggestionsList from "../../commons/views/templates/lists/suggestions-list/SuggestionsList";
import MyListContainer from "../../commons/views/templates/lists/my-list-grid/MyListContainer";

//react
import { useEffect, useState } from "react";

//functions
import { getData } from "../../commons/functions/requests";

//data 
import { myList } from "../../commons/data/data";

//css
import "./MySpaceSuggestions.css";

export default function MySpaceSuggestions(){

    const [myFirstListData,setmyFirstListData] = useState([]);
    const [historical,setHistorical] = useState([]);

    useEffect(() => {
        let args = {
            contentType:{current:"movie"},
            genre:{current:myList[1].genre},
            pages:{current:1}
        }
        getData(args,setmyFirstListData);

        args = {
            contentType:{current:"movie"},
            genre:{current:35},
            pages:{current:10}
        }

        getData(args,setHistorical);
    },[]);

    return(
        <section id="my-space-suggestions">
            <h2>MON ESPACE</h2>
            <SuggestionsList title="Continuer de regarder" titleImportanceThree={true} suggestionsData={historical} />
            <MyListContainer value={myList[1]} suggestionsData={myFirstListData} />
        </section>
    )
}