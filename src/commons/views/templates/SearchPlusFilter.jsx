import SearchInput from "../components/inputs/SearchInput";
import DropDown from "../components/inputs/DropDown";
import Loading from "../components/loadings/Loading";

import "./SearchPlusFilter.css";

export default function SearchPlusFilter(props){

    const formatVideo = [
        {
            id:0,
            name:"Films",
            value:0
        },
        {
            id:1,
            name:"Séries",
            value:1
        }
    ];


    function changeData(e){
        props.dataToSetFilter(e.target.value);
    }

    return(
        <div className="search-plus-filter">
            <SearchInput searchFunction={props.searchFunction} />
            {props.waitLoadingDropdown ?
                <DropDown values={formatVideo} name="format" onChangeEvent={changeData}/> 
                :<Loading/>
            }
        </div>
    )
}