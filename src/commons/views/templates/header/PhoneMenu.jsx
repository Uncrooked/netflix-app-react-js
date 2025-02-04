import "./PhoneMenu.css";

export default function PhoneMenu(props){
    return(
        <div className={props.styleClass}>
            <img src={"/assets/img/svg/" + props.menuIcon + "-menu.svg"} alt={props.alt} onClick={props.onClickEvent}/>
        </div>
    )
}