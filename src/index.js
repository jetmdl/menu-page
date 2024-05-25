//import modules here 
import './style.css';
import createTemplate from './createTemplate';
import insertItems from './createMenu';
import getMenuItems from './menuItems';
import removeElementsFromDefined from './removeItems';
//import addMenuListeners from './addEventListners';
import createHomePage from './createHomePage';
import createContactPage from './createContact';

function goToHome() {
    removeElementsFromDefined('centreContent');
    createHomePage();
}

function goToMenu() {
    removeElementsFromDefined('centreContent'); 
    const items = getMenuItems();
    insertItems(items);
}

function goToContact() {
    removeElementsFromDefined('centreContent');
    createContactPage();
}

createTemplate();
//addMenuListeners();
document.querySelector("#menuHomeButton").addEventListener('click', goToHome);
document.querySelector("#menuMenuButton").addEventListener('click', goToMenu);
document.querySelector("#menuContactButton").addEventListener('click', goToContact);
createHomePage();
