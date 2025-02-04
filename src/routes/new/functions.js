export function searchFilterElements(e){
    e.preventDefault();
    const allElements = document.getElementById("suggestion-new-list").getElementsByClassName("suggestion-new");
    const searchContent = document.getElementById("new").getElementsByClassName("search-form")[0].getElementsByTagName("input")[0].value.toLowerCase();
    for(let element of allElements){
        let textContent = element.getElementsByTagName("h2")[0].innerText.toLowerCase()
        if(textContent.includes(searchContent)){
            element.classList.remove("display-none");
        }else{
            element.classList.add("display-none");
        }
    }
}