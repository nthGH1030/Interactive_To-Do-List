function createCloseButton(){

    // Question: Use querySelectorAll or getElementsByTagName? 
    // Ans: querySelectorAll return a static node list while getElement return a live node list
    // Further ans: Live node list can be appended but static cannot

    const list = document.querySelectorAll("li")
    .forEach((listItem) => {

        //checked the listitem & button when clicked
        listItem.addEventListener('click', () => {
            console.log('lisitem clicked');
            listItem.classList.toggle('checked');

            if(listItem.classList.contains("checked"))
            {
                button.classList.add("close-checked");
            }
            else
            {
                button.classList.remove("close-checked");
            }
        });

        //Hide the item when clicking close button
        const button = document.createElement('button');
        button.className = "close";
        button.textContent = "\u00D7";
        button.addEventListener('click', () => {
            console.log('checked');

        });

        listItem.appendChild(button);

  

    })
    
}

createCloseButton();

