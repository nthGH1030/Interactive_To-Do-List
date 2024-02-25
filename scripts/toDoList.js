function createCloseButton(){

    // Question: Use querySelectorAll or getElementsByTagName? 
    // Ans: querySelectorAll return a static node list while getElement return a live node list
    // Further ans: Live node list can be appended but static cannot

    const list = document.querySelectorAll("li")
    .forEach((listItem) => {
        const button = document.createElement('button');
        button.className = "close";
        button.textContent = "\u00D7";
        button.addEventListener('click', () => {
            console.log('clicked');
        });
        listItem.appendChild(button);
        
        //listItem.insertAdjacentElement('afterend', button);
    })
    
    //console.log(list);
}

createCloseButton();