export default function createHomePage(items){

    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'aboutDiv';
    aboutDiv.id = 'aboutDiv';
    aboutDiv.innerText = 'about';

    document.querySelector('#centreContent').appendChild(aboutDiv);


    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hoursDiv';
    hoursDiv.id = 'hoursDiv';
    hoursDiv.innerText = 'hours';

    document.querySelector('#centreContent').appendChild(hoursDiv);

}