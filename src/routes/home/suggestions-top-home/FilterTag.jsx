import { allCategories, allVideoFormat } from "../../../commons/data/data";

import "./FilterTag.css";

export default function FilterTag(props){

    let contentType = allVideoFormat.find(param => param.value == props.contentTypeSelected)?.name || null;
    let categoryForContent = allCategories.find(param => param.value == props.genreSelected)?.name || null;

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