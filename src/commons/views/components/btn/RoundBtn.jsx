import "./RoundBtn.css";

export default function RoundBtn(props){
    
    return(
        <a href="#" className={"round-btn " + props.importance}>
            <img src={"/assets/img/svg/" +  props.iconName + "-icon.svg"} alt={"bouton rond avec icône" + props.iconName + "de netflix"} className={props.classStyle && props.classStyle}/>
        </a>
    )
}