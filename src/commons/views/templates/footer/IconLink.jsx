import "./IconLink.css";

export default function IconLink(props){
    return(
        <li className="social-link">
            <a href="#">
                <img src={"/public/assets/img/svg/" + props.iconName + "-icon.svg"} alt={"icône " + props.iconName} />
            </a>
        </li>
    )
}