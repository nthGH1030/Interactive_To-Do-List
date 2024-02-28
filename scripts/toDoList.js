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