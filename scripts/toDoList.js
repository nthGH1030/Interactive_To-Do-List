function RenderTaskList(){

    //handle AddTask Button
    const container = document.querySelector(".container");
    const addTaskbtn = document.querySelector(".AddTask");
    addTaskbtn.addEventListener('click' , () => {
        AddTask(container)
    });

    //Handle the existing list
    document.querySelectorAll("li")
    .forEach((listItem) => {

        const button = CreateCloseButton(listItem);

        //check the listitem when clicked
        listItem.addEventListener('click', () => {
            //console.log('lisitem clicked');
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


    draggableElement();
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
function AddTask(container){
    
    //get userinput
    const userInput = document.querySelector("#myInput").value;

    if (userInput === "")
    {
        alert('Your input cannot be blank !');
        
    }
    //handle exception and append it into the eexisting list
    else
    {
        //create a new list item 
        const list = document.createElement("li");
        //set the new element value with the user input, append it to the list item
        const newListItem = document.createTextNode(userInput);
        list.appendChild(newListItem);
        //Add draggable function
        list.classList.add("draggable");
        list.setAttribute("draggable" , true);
        
        //Add close button
        CreateCloseButton(list);
        //Append to the existing list
        document.querySelector("#myUL").appendChild(list);
        container.appendChild(list);
 
    }
}





function draggableElement(){
    //get the draggable elememt
    const draggables = document.querySelectorAll(".draggable");
    //get the container element
    const containers = document.querySelectorAll(".container");
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
    containers.forEach((container) => {
        container.addEventListener('dragover' , e => {
            const draggingYcoordinate = e.clientY;
            const elementAfter = getDragAfterElement(container, draggingYcoordinate);
            
            const dragging = document.querySelector('.dragging');
            if(elementAfter == null)
            {
                container.appendChild(dragging);
            }
            else
            {
                container.insertBefore(dragging, elementAfter);
            }
        })
    })
    
}

function getDragAfterElement(container, y) {

    //The target of this function is to determine which element is after the dragging element

    //put all draggable element into an array which we are not currently dragging

    let closestElement = null;
    let closestOffest = Number.NEGATIVE_INFINITY;

    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    draggableElements.forEach((draggableElement)=> {
        const rect = draggableElement.getBoundingClientRect();
        //get the middle coordinate of the rect
        const offset = y - rect.top - rect.height / 2;
        //console.log(offset);

        //check the closest
        //The offset should be negative -> its in front of the draggable
        //The offset should be the closestOffest than all other draggable 
        if(offset < 0 && offset > closestOffest)
        {
            //set the closestElement to be the draggable element
            closestElement = draggableElement;
            //update the closesetOffset to ready for next loop
            closestOffest = offset;
        }

    })

    return closestElement;
}



RenderTaskList();