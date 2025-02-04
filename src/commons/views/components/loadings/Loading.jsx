import "./Loading.css";

export default function Loading(props){
    return(
        <img src="/assets/img/svg/loading-img.svg" alt="image de chargement de Netflix" className={props.notShow ? "display-none" : "loading-img"}/>
    )
}