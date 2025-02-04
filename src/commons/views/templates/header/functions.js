export function phoneMenuActions(param){
    const navLinksMenuEl = document.getElementById("header").getElementsByClassName("nav-links")[0];
    const bodyEl = document.getElementsByTagName("body")[0];
    if(param == "open"){
        navLinksMenuEl.classList.add("display");
        bodyEl.style.overflowY = "hidden";
    }else{
        navLinksMenuEl.classList.remove("display");
        bodyEl.style.overflowY = "scroll";
    }
}