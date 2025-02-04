export function onChangeDropdownList(e){
    const allListContainer = document.getElementsByClassName("my-list-container");
    for(let listContainer of allListContainer){
        const titleValue = listContainer.getElementsByTagName("h2")[0].getAttribute("data-value");
        listContainer.classList.toggle("display-none",e.target.value != "tout" ? titleValue != e.target.value : false);
    }
}