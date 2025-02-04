import "./PosterLoading.css";

export default function PosterLoading(props){
    return(
        <div className={props.loaded ? "display-none" : "poster-loading"}></div>
    )
}