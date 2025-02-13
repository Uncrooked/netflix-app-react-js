export function handleChange(e,functionSet,setIsFiltered){
    const value = e.target.options[e.target.selectedIndex].value;
    functionSet(value);
    if(value != "false"){
        setIsFiltered(true);
    }else{
        setIsFiltered(false);
    }
    removeHeader();
}

export function removeHeader(){
    const bodyEl = document.getElementsByTagName("body")[0];
    const navLinksMenuEl = document.getElementById("header").getElementsByClassName("nav-links")[0];
    navLinksMenuEl.classList.remove("display");
    bodyEl.style.overflowY = "scroll";
}