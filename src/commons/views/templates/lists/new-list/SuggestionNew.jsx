import Poster from "../../../components/poster/Poster";
import RoundBtn from "../../../components/btn/RoundBtn";
import LabelTag from "../../../components/LabelTag";

import "./SuggestionNew.css"

export default function SuggestionNew(props){
    return(
        <div>
            <Poster sizeFormat="portrait" pathImg={props.pathImg} title={props.title} removeHover={true}/>
            <div>
                <h2>{props.title ? props.title : "BATMAN LES MASQUES VONT TOMBER"}</h2>
                <LabelTag color={props.color}>{props.labelTag}</LabelTag>
                <p className="desc">{props.desc}</p>
                <div className="btn-container">
                    <RoundBtn iconName="play" importance="primary"/>
                    <RoundBtn iconName="heart" importance="secondary"/>
                    <RoundBtn iconName="dropdown" importance="secondary"/>
                </div>
            </div>
        </div>
    )
}