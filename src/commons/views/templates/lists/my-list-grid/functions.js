export function developList(e,showMoreParam,setShowMoreParam){
    const listContainerGridEl = e.target.closest(".my-list-container").getElementsByClassName("my-list-container-grid")[0];
    listContainerGridEl.classList.toggle("height-fit-content");
    setShowMoreParam(!showMoreParam);
}