//react
import NavLeftHeader from "./nav-left/NavLeftHeader.jsx";
import NavRightHeader from "./NavRightHeader.jsx";
import PhoneMenu from "../PhoneMenu.jsx";

//functions
import { phoneMenuActions } from "../functions.js";

//css
import "./NavLinks.css";

export default function NavLinks(props){
    return(
        <div className="nav-links">
            <PhoneMenu  styleClass="cross-menu" menuIcon="cross" alt="Croix pour fermer le menu Netflix ouvert" onClickEvent={() => {phoneMenuActions("close")}}/>
            <NavLeftHeader allLinks={props.allLinks} functionsSet={props.functionsSet} setIsFiltered={props.setIsFiltered} />
            <NavRightHeader allData={props.allData} />
        </div>
    )
}