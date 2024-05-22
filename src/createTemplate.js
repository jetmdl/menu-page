export default function createTemplate(){

    const menuBar = document.createElement('div');
    const flexContainer = document.createElement('div');
    const leftPad = document.createElement('div');
    const rightPad = document.createElement('div');
    const centreContent = document.createElement('div'); 

    flexContainer.id = 'flexContainer';
    leftPad.id = 'leftPad';
    rightPad.id = 'rightPad';
    centreContent.id = 'centreContent';
    menuBar.id = 'menuBar';

    document.querySelector('.content').appendChild(menuBar);
    document.querySelector('.content').appendChild(flexContainer);
    document.querySelector('#flexContainer').appendChild(leftPad);
    document.querySelector('#flexContainer').appendChild(centreContent);
    document.querySelector('#flexContainer').appendChild(rightPad);
}