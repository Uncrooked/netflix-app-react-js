import { getData, searchData } from "../../../../../functions/requests";
import { allFetches } from "./data";

async function getFirstData(contentTypeParam,genreParam,pageParam,setDataToGetParam){//good
    const args = {
        contentType:{current:allFetches[0][contentTypeParam]},
        genre:{current:allFetches[1][genreParam]},
        pages:{current:pageParam}
    }
    console.log(contentTypeParam,genreParam,pageParam,setDataToGetParam);
    let data = await getData(args);
    setDataToGetParam(current => current.length > 0 ? [...current, ...data] : data);
}



/*————————————————————————————————————————all Exports———————————————————————————————————*/

export function handleFocusOutEvent(){ 
    setTimeout(() => {
        const allSearchEl = document.getElementById("search-results").getElementsByClassName("all-searched")[0];
        allSearchEl.classList.add("display-none");
    },100)
}

export function handleFocusEvent(e,setFunctions,variables){
    setFunctions["setCurrentSearchPage"](1);
    setFunctions["setLength"](1);

    const searchContent = document.getElementById("header").getElementsByClassName("search-form")[0].getElementsByTagName("input")[0].value.toLowerCase();
    
    if(searchContent.length > 0){
        setFunctions["setInSearching"](true);
        searchData(setFunctions["setDataToGet"],searchContent,setFunctions["setTotalSearchPages"]);
    }else{
        setFunctions["setInSearching"](false);
        getFirstData(variables["contentType"],variables["genre"],variables["page"],setFunctions["setDataToGet"]);
    }

    const allSearchEl = document.getElementById("search-results").getElementsByClassName("all-searched")[0];
    allSearchEl.classList.remove("display-none");
}

export function handleScrollEvent(e,setFunctions,variables){
    const searchResultEl = e.target.getElementsByTagName("a")[0];

    if(searchResultEl){
        if(e.target.scrollTop >= ((searchResultEl.offsetHeight * 20 ) * (variables["length"])) - (e.target.offsetHeight - 40)){
                if(!variables["inSearching"]){
                    if(variables["page"] < 12){
                        setFunctions["setPage"](current => current + 1);
                    } else {
                        setFunctions["setPage"](1);
                        if(variables["genre"] < allFetches[1].length - 1 && variables["contentType"] == 0){
                            setFunctions["setGenre"](current => current + 1);
                        } else {
                            if(variables["genre"] < allFetches[1].length - 1){
                                setFunctions["setGenre"](current => current + 1);
                            } else {
                                setFunctions["setGenre"](0);
                                setFunctions["setContentType"](current => current + 1);
                            }
                        }
                    }

                    setFunctions["setLength"](current => current + 1);
                    getFirstData(variables["contentType"],variables["genre"],variables["page"],setFunctions["setDataToGet"]);
                } else {
                    if(variables["totalSearchPages"] > 1){
                        setFunctions["setCurrentSearchPage"](current => current + 1);
                        setFunctions["setLength"](current => current + 1);
                        const searchContent = document.getElementById("header").getElementsByClassName("search-form")[0].getElementsByTagName("input")[0].value.toLowerCase();
                        searchData(setFunctions["setDataToGet"], searchContent,setFunctions["setTotalSearchPages"],variables["currentSearchPage"],true);
                    }
                }
        }
    }
}

export function handleSearchEvent(e,setFunctions){
    setFunctions["setCurrentSearchPage"](1);
    setFunctions["setLength"](1);
    const searchContent = document.getElementById("header").getElementsByClassName("search-form")[0].getElementsByTagName("input")[0].value.toLowerCase();
    if(searchContent.length > 0){
        setFunctions["setInSearching"](true);
        searchData(setFunctions["setDataToGet"],searchContent,setFunctions["setTotalSearchPages"]);
    }else{
        setFunctions["setInSearching"](false);
    }
}

/*————————————————————————————————————————end Exports———————————————————————————————————*/