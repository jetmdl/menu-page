export default function createTemplate(){

    //Create and append top menu bar 
    const menuBar = document.createElement('div');
    menuBar.id = 'menuBar';
    document.querySelector('.content').appendChild(menuBar);

    //Create and append icon container in menu bar 
    const menuIconContainer = document.createElement('div');
    menuIconContainer.id = 'menuIconContainer';
    document.querySelector('#menuBar').appendChild(menuIconContainer);

    //Create and append button container and button divs in menu bar 
    const menuButtonContainer = document.createElement('div');
    menuButtonContainer.id = 'menuButtonContainer';
    document.querySelector('#menuBar').appendChild(menuButtonContainer);

    const menuHomeButton = document.createElement('div');
    menuHomeButton.id = 'menuHomeButton';
    menuHomeButton.innerHTML = 'Home';
    menuHomeButton.className = 'menuButton';
    document.querySelector('#menuButtonContainer').appendChild(menuHomeButton);

    const menuMenuButton = document.createElement('div');
    menuMenuButton.id = 'menuMenuButton';
    menuMenuButton.innerHTML = 'Menu';
    menuMenuButton.className = 'menuButton';
    document.querySelector('#menuButtonContainer').appendChild(menuMenuButton);

    const menuContactButton = document.createElement('div');
    menuContactButton.id = 'menuContactButton';
    menuContactButton.innerHTML = 'Contact';
    menuContactButton.className = 'menuButton';
    document.querySelector('#menuButtonContainer').appendChild(menuContactButton);

    //Create and append the flex container that holds the center content and padding divs 
    const flexContainer = document.createElement('div');
    flexContainer.id = 'flexContainer';
    document.querySelector('#content').appendChild(flexContainer);

    //Create top menu bar 
    const leftPad = document.createElement('div');
    leftPad.id = 'leftPad';
    document.querySelector('#flexContainer').appendChild(leftPad);

    //Create top menu bar 
    const centreContent = document.createElement('div'); 
    centreContent.id = 'centreContent';
    document.querySelector('#flexContainer').appendChild(centreContent);

    //Create top menu bar 
    const rightPad = document.createElement('div');
    rightPad.id = 'rightPad';
    document.querySelector('#flexContainer').appendChild(rightPad);
}