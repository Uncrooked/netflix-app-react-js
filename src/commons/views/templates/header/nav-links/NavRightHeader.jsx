import AllSearchResults from "./search-results/AllSearchResults";

//css
import './NavRightHeader.css';

export default function NavRightHeader(props){

    return (
        <nav id="nav-right-header">
            <AllSearchResults allData={props.allData} />
            <div>
                <img src="/assets/img/svg/ringtone-icon.svg" alt="Icône notifications" />
                <img src="/assets/img/svg/profile-img.svg" alt="Votre profile Netflix" />
            </div>
        </nav>
    )
}