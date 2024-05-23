export default function insertItems(items){
    let idIncrement = 0;
    let catIncrement = 0;
    console.log(items);
    for(let i=0; i<items.length; i++){
        if(items[i].type == 'dish'){
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'menuItem';
            menuItemDiv.id = 'menuItem' + idIncrement;
            menuItemDiv.innerText = items[i].dish;
    
            document.querySelector('#centreContent').appendChild(menuItemDiv);
            idIncrement++;
        }
        else if (items[i].type == 'heading'){
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'menuCategory';
            categoryDiv.id = 'menuCategory' + catIncrement;
            categoryDiv.innerText = items[i].heading;
    
            document.querySelector('#centreContent').appendChild(categoryDiv); 
            catIncrement++;
        }

    }
}

