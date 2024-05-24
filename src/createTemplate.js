export default function createTemplate(){

    const menuBar = document.createElement('div');
    menuBar.id = 'menuBar';
    document.querySelector('.content').appendChild(menuBar);

    const flexContainer = document.createElement('div');
    flexContainer.id = 'flexContainer';
    document.querySelector('.content').appendChild(flexContainer);

    const leftPad = document.createElement('div');
    leftPad.id = 'leftPad';
    document.querySelector('#flexContainer').appendChild(leftPad);

    const centreContent = document.createElement('div'); 
    centreContent.id = 'centreContent';
    document.querySelector('#flexContainer').appendChild(centreContent);

    const rightPad = document.createElement('div');
    rightPad.id = 'rightPad';
    document.querySelector('#flexContainer').appendChild(rightPad);
}