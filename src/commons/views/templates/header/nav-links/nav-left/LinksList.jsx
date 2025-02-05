//components & templates
import Link from "../../../../components/Link.jsx";

//css
import "./LinksList.css";

export default function LinksList(props){
    //all Links displaying
    const LinksToDisplay = props.allLinks.map(param =>
        <li className="link-header" key={param.id} >
            <Link data={param} onClickEvent={props.onClick} key={param.id}>
                {param.name}
            </Link>
        </li>
    );
    return(
        <ul id="links-header">
            {LinksToDisplay}
        </ul>
    )
}