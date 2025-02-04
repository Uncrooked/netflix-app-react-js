import { useCallback,useState } from "react";
import SearchInput from "../../../../components/inputs/SearchInput";
import SearchResult from "./SearchResult.jsx";
import Loading from "../../../../components/loadings/Loading";
import "./AllSearchResults.css";

//functions
import { handleFocusEvent, handleSearchEvent, handleScrollEvent } from "./functions.js";

export default function AllSearchResults(){


    /*———————————————————————————————————SET VARIABLES————————————————————————————————————————-*/
    const [dataToGet,setDataToGet] = useState([]);
    const [contentType,setContentType] = useState(0);
    const [genre,setGenre] = useState(0);
    const [page,setPage] = useState(1);
    const [length,setLength] = useState(1);
    const [totalSearchPages,setTotalSearchPages] = useState(1);
    const [currentSearchPage,setCurrentSearchPage] = useState(1);
    const [inSearching,setInSearching] = useState(false);

    let interval;

    let setFunctionsObject = {
        "setCurrentSearchPage": setCurrentSearchPage,
        "setLength": setLength,
        "setInSearching": setInSearching,
        "setDataToGet": setDataToGet,
        "setTotalSearchPages": setTotalSearchPages,
        "setPage": setPage,
        "setContentType": setContentType,
        "setGenre": setGenre
    };

    /*———————————————————————————————————END SET VARIABLES————————————————————————————————————————-*/


    /*———————————————————————————————————ALL EVENTS HANDLER————————————————————————————————————————-*/
    const handleFocus = useCallback((e) => {

        let argsObject = {
            "genre":genre,
            "contentType":contentType,
            "page":page
        }

        handleFocusEvent(e,setFunctionsObject,argsObject);
    });

    const handleFocusOutEvent = useCallback(() => { 
        setTimeout(() => {
            const allSearchEl = document.getElementById("search-results").getElementsByClassName("all-searched")[0];
            allSearchEl.classList.add("display-none");
            setDataToGet([]);
        },100)
    })

    const handleSearch = useCallback((e) =>{

        clearTimeout(interval);

        interval = setTimeout(() => {
            handleSearchEvent(e,setFunctionsObject)
        },500)

        return;
    })

    const handleScroll = useCallback((e) => {

        let argsObject = {
            "currentSearchPage":currentSearchPage,
            "totalSearchPages":totalSearchPages,
            "contentType":contentType,
            "genre":genre,
            "page":page,
            "length":length,
            "inSearching":inSearching
        }
        
        handleScrollEvent(e,setFunctionsObject,argsObject);
    })

    /*———————————————————————————————————END EVENTS HANDLER————————————————————————————————————————-*/



    /*———————————————————————————————————RENDER LIST————————————————————————————————————————-*/
    if(dataToGet.length > 0 ){
        var dataToShow = dataToGet.map((param,index) => 
            <li>
                <SearchResult key={index} pathImg={param.poster_path || param.backdrop_path} title={param.title || param.name} />
            </li>
    );
    }
    /*———————————————————————————————————END RENDER————————————————————————————————————————-*/

    return(
        <div id="search-results">
            <SearchInput searchFunction={handleSearch} onFocusEvent={handleFocus} onFocusOutEvent={handleFocusOutEvent}/>
            <ul className="all-searched display-none" onScroll={handleScroll}>
                {
                    dataToShow && dataToShow.length > 0 ? dataToShow : <Loading />
                }
            </ul>
        </div>
    )
}