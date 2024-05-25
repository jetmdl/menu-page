export default function addMenuListeners(){
    document.querySelector("#menuHomeButton").addEventListener('click', goToHome);
    document.querySelector("#menuMenuButton").addEventListener('click', goToMenu);
    document.querySelector("#menuContactButton").addEventListener('click', goToContact);
}