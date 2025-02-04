import "./Btn.css";

export default function Btn(props){

    if(props.iconName && props.iconAlt){
        var iconContent = <img src={"/assets/img/svg/" + props.iconName + "-icon.svg"} alt={props.iconAlt} />;
    }

    return(
        <a href={props.linkPath} className={"btn " + props.className}>
            {iconContent && iconContent}
            {props.children}
        </a>
    )
}