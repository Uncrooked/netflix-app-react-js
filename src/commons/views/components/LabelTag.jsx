import "./LabelTag.css";

export default function LabelTag(props){
    return <div className={"label-tag " + props.color}>{props.children}</div>
}