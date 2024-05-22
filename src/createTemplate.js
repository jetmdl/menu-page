export default function createTemplate(){
    const leftPad = document.createElement('div');
    const rightPad = document.createElement('div');
    const centreContent = document.createElement('div'); 
    const menuBar = document.createElement('div');

    leftPad.id = 'leftPad';
    rightPad.id = 'rightPad';
    centreContent.id = 'centreContent';
    menuBar.id = 'menuBar';

    //document.querySelector('.body').appendChild(menuBar);
    document.querySelector('.content').appendChild(leftPad);
    document.querySelector('.content').appendChild(centreContent);
    document.querySelector('.content').appendChild(rightPad);
}

