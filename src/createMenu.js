export default function insertItems(items){
    let idIncrement = 0;
    let catIncrement = 0;
    for(let i=0; i<items.length; i++){
        if(items[i].type == 'dish'){
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'menuItem';
            menuItemDiv.id = 'menuItem' + idIncrement;
            menuItemDiv.innerText = items[i].dish;
    
            document.querySelector('#centreContent').appendChild(menuItemDiv);
            menuItemDiv.addEventListener('click', GetClickedId);
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
    function GetClickedId(){
        expandDiv(this.id);
    }
    function expandDiv(anId){
        const toExpand = document.getElementById(anId);
        toExpand.removeEventListener('click', GetClickedId);
        toExpand.style = 'height: 200px';
        toExpand.addEventListener('click', contractGetClickedId);
    }
    function contractGetClickedId(){
        contractDiv(this.id);
    }
    function contractDiv(anId){
        const toContract = document.getElementById(anId);
        toContract.removeEventListener('click', contractGetClickedId);
        toContract.style = 'height: 50px';
        toContract.addEventListener('click', GetClickedId);
    }
}
