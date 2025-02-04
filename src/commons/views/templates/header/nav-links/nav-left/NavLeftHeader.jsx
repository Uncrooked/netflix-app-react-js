// props.valuesDropDownSelected[0] == dropdown content type & props.valuesDropDownSelected[1] == dropdown categories
//props.allData[0] == first data fetched && props.allData[1] == allDataFetched

//react
import { useLocation } from "react-router-dom";
import DropDown from "../../../../components/inputs/DropDown.jsx";
import LinksList from "./LinksList.jsx";

//variables
import { allVideoFormat, allCategories } from "./data.js";

//functions
import { removeHeader, handleChange } from "./functions.js";

//css
import './NavLeftHeader.css';

export default function NavLeftHeader(props){

    //Show dropdown only in the home pagge
    const location = useLocation();

    return (
        
        <nav id="nav-left-header">   

            <LinksList allLinks={props.allLinks} onClick={removeHeader}/>
            {
                (location.pathname == "/")?
                    [<DropDown name="content-type" values={allVideoFormat} key="content-type" onChangeEvent={handleChange}  params={[props.functionsSet[0],props.setIsFiltered]}/>,
                    <DropDown name="category-for-content" values={allCategories} key="category-for-content" onChangeEvent={handleChange} params={[props.functionsSet[1],props.setIsFiltered]}/>]
                :""
            }
        </nav>
    )
}