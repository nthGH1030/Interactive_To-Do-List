function RenderTaskList(){
    const list = document.querySelectorAll("li")
    .forEach((listItem) => {

        const button = CreateCloseButton(listItem);

        //check the listitem when clicked
        listItem.addEventListener('click', () => {
            console.log('lisitem clicked');
            listItem.classList.toggle('checked');
        
            //handle the close button
            if(listItem.classList.contains("checked"))
            {
                button.classList.add("close-checked");
            }
            else
            {
                button.classList.remove("close-checked");
            }
    });

})
}

function CreateCloseButton(listItem){
        //Hide the item when clicking close button
        const button = document.createElement('button');
        button.className = "close";
        button.textContent = "\u00D7";
        button.addEventListener('click', () => {
            listItem.style.display = "none";
    
        });
        listItem.appendChild(button);

        return button
}

    
//create item when clicking "add" button
function AddTask(){
    //create a new list item 
    const list = document.createElement("li");
    //get userinput
    const userInput = document.querySelector("#myInput").value;
    //console.log(userInput);
    //set the new element value with the user input, append it to the list item
    const newListItem = document.createTextNode(userInput);
    list.appendChild(newListItem);

    //handle exception and append it into the eexisting list
    if (userInput === "")
    {
        alert('Your input cannot be blank !');
    }
    else{
        //Append to the existing list
        document.querySelector("#myUL").appendChild(list);
        //create close button
        RenderTaskList();

    }
    
    
}

RenderTaskList();


function draggableElement(){
    //get the draggable elememt
    const draggables = document.querySelectorAll(".draggable");
    //get the container element
    const container = document.querySelectorAll(".container");
    //add event listener to draggable for dragstart 
    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart' , () => {
            
            //implement fading effect for draggable 
            draggable.classList.add('dragging');
        })
    })
    //add event listener to draggable to dragend
    draggables.forEach((draggable) => {
        draggable.addEventListener('dragend' , () => {
            //remove the fading effect
            draggable.classList.remove('dragging');
            
        })
    })
    //implement make dragging element fit in the correct sorting order
    /*
    if the return is not null, insert the draggable before the element
    else
    insert the draggable at the end.
    */
    draggables.forEach((draggable) => {
        draggable.addEventListener('dragover' , e => {
            const draggingYcoordinate = e.clientY;
            getDragAfterElement(container, draggingYcoordinate);
        })
    })
    
}

function getDragAfterElement(container , y) {

    //The target of this function is to determine which element is after the dragging element

    //put all draggable element into an array which we are not currently dragging
    const draggableElements = [...document.querySelectorAll('.draggable:not(.dragging)')];
    draggableElements.forEach((draggableElement)=> {
        const rect = draggableElement.getBoundingClientRect();
        //get the middle line of the rect
        const mid = (rect.top - rect.bottom) / 2;
        //check the closest element
    })

    /*Go through each array element, get the centre point of their coordinate
    , compare it with the draggable's coordinate , return the closest element
    that is right below the draggable
    */
}

draggableElement();