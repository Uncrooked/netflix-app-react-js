import "./SearchInput.css";

export default function SearchInput(props){

    return(
        <form action="" className="search-form" onSubmit={props.searchFunction}>
            <input type="search" onChange={props.searchFunction} onFocus={props.onFocusEvent} onBlur={props.onFocusOutEvent}/>
            <button type="submit"><img src="/assets/img/svg/search-icon.svg" alt="Icon de recherche" /></button>
        </form>
    )
}