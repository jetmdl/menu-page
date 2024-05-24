export default function removeElementsFromDefined(anId){
    const el = document.getElementById(anId);
    while(el.firstChild) {
        el.removeChild(el.lastChild);
    }
}