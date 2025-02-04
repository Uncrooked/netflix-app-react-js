import { NavLink } from "react-router-dom"

export default function Link(props){

    return(
        <NavLink to={props.data.path} onClick={props.onClickEvent} end={props.hasChild}>
            {props.children}
        </NavLink>
    )
}