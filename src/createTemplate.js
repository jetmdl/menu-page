function createTemplate(){
    const leftPad = document.createElement('div');
    const rightPad = document.createElement('div');
    const centreContent = document.createElement('div'); 

    leftPad.id = 'leftPad';
    rightPad.id = 'rightPad';
    centreContent.id = 'centreContent';

    document.querySelector('.content').appendChild(leftPad);
    document.querySelector('.content').appendChild(centreContent);
    document.querySelector('.content').appendChild(rightPad);
}

