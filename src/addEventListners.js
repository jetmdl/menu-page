function addExpandListeners(){
    let clickedIdLight = document.getElementsByClassName("expandButton");
    for (let i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', expandGetClickedId);
    }
}