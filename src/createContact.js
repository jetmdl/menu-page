export default function createContactPage(items){

    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'aboutDiv';
    aboutDiv.id = 'aboutDiv';
    aboutDiv.innerText = 'contact one';

    document.querySelector('#centreContent').appendChild(aboutDiv);


    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hoursDiv';
    hoursDiv.id = 'hoursDiv';
    hoursDiv.innerText = 'contact two';

    document.querySelector('#centreContent').appendChild(hoursDiv);

}