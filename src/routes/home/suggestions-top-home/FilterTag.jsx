import { useState , useEffect } from "react";

import "./FilterTag.css";

export default function FilterTag(props){

    const [contentType,setContentType] = useState(null);
    const [categoryForContent,setCategoryForContent] = useState(null);
    
    useEffect(() => {
        function handleClick(){
            const dropdownHeaderEl = document.getElementById("header").getElementsByClassName("dropdown")

            for(let dropdownEl of dropdownHeaderEl){
                dropdownEl.onchange = () => {
                    switch(dropdownEl.getAttribute("name")){
                        case "category-for-content":
                            setCategoryForContent(dropdownEl.options[dropdownEl.selectedIndex].innerText);
                            break;
                        case "content-type":
                            setContentType(dropdownEl.options[dropdownEl.selectedIndex].innerText);
                            break;
                    }
                }
            }
        }

        handleClick();
    })
    return(
        <div id="filter-tag">
            <p className="top">
                {
                    (
                        contentType != "Type de contenu" &&
                        contentType != null || 
                        categoryForContent != "Catégorie" &&
                        categoryForContent != null 

                    ) 
                    && "Vous choisissez parmis"
                }
            </p>
            <div className="flex-container">
            <p className="middle">{(contentType != "Type de contenu") && contentType }</p>
            <p className="bottom">{(categoryForContent != "Catégorie") && categoryForContent }</p>
            </div>
        </div>
    )
}