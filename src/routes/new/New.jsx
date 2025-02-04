import SearchPlusFilter from "../../commons/views/templates/SearchPlusFilter";
import SuggestionNewList from "../../commons/views/templates/lists/new-list/SuggestionNewList";
import Switcher from "../../commons/views/components/inputs/switcher/Switcher";

//react
import { useState, useEffect } from "react";

//functions
import { searchFilterElements } from "./functions";

//data
import {newData} from "./data";

//css
import "./New.css";
import { getData } from "../../commons/functions/requests";

export default function New(props){

    const [dateSelected,setDateSelected] = useState(0);
    const [contentTypeSelected,setContentTypeSelected] = useState(0);

    const [allNewData,setallNewData] = useState([]);
    const [labelTag,setLabelTag] = useState(newData[dateSelected]["label-tag"]);
    const [colorTag,setColorTag] = useState(newData[dateSelected]["color"]);

    useEffect(() => {

        const contentTypes = ["movie","tv"];

        const args = {
            contentType:{current:contentTypes[contentTypeSelected]},
            genre:{current:newData[dateSelected].genre},
            pages:{current:newData[dateSelected].page}

        }

        setLabelTag(newData[dateSelected]["label-tag"]);
        setColorTag(newData[dateSelected]["color"]);

        getData(args,setallNewData);

    },[contentTypeSelected,dateSelected]);

    return(
        <section id="new" className="responsive-spacing">
            <h1>NOUVEAUTÉS SUR NETFLIX</h1>
            <Switcher valueToChangeFunction={setDateSelected} />
            <SearchPlusFilter dataToSetFilter={setContentTypeSelected} searchFunction={searchFilterElements} waitLoadingDropdown={true}/>
            <SuggestionNewList suggestionsData={allNewData} labelTag={newData[dateSelected]["label-tag"]} color={newData[dateSelected]["color"]}/>
        </section>
    )

}