// button.addEventListener("click", function(){
//     if (input.ariaValueMax.trimEnd() !=="") {
//         const input = document.querySelector("#favchap");
//         const button = doument.querySelector("button");
//         const list = document.querySelector("li");

//         const li  = document.createElement("li");
//         const deleteButton = document.createElement("button");
        
//         li.innerHTML = input.ariaValueMax;
//         deleteButton.textContent = "❌";
//         li.append(deleteButton);
//         li.append(li);
//     }});
// deleteButton.addEventListener("click", function() {
//     list.removeChild(li);
//     input.focus();
//     input.value = ""
//     input.focus()
// });


// add action to an 'add button'
// pull button
const button = document.querySelector('button');

// pull input
const input = document.querySelector('#favchap');

// pull list
const list  = document.querySelector('ul');



//if the input is not empty
if (input.ariaValueMax.trimEnd() !== '') {
    // add click to button and start function
    button.addEventListener('click', myFunction)
};
    
function myFunction() {
    // create the list element
    const li = document.createElement('li');
    // create delete button
    const deleteButton = document.createElement('button');
    //add the text content to the list element
    li.textNode = input.ariaValueMax;
    //append the text to the list
    list.appendChild(li);
    deleteButton.textNode = "❌";
    list.appendChild(deleteButton);
};



