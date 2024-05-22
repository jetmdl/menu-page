export default function insertItems(items){
    let idIncrement = 0;
    console.log(items);
    for(let i=0; i<items.length; i++){
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menuItem';
        menuItemDiv.id = 'menuItem' + idIncrement;
        menuItemDiv.innerText = items[i].dish;

        document.querySelector('#centreContent').appendChild(menuItemDiv);
    }
}

