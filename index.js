// initialise count = 0
// listen for clicks (event listener): onclick event listener html attribute in html submit id
// increment variable when button is clicked
// change the count-el in the html file to reflect new count
 


let saveEl = document.getElementById("save-el");    // grabs the save-el para. Stored in new variable. 
let countEl = document.getElementById("count-el");
let resetEl = document.getElementById("reset-btn");

let count = 0;


function increment() {
    count += 1;
    countEl.textContent = count;
}


function save() {

    let countStr = count + " - ";
    saveEl.textContent += countStr;   // .innerText here won't show the space/hidden/non-human readable content

    countEl.textContent = 0;    // save button sets the h2 element to 0 (which is the text counting for us)
    count = 0;      // must add this bc otherwise it keeps the value from before instead of counting up from 0 again. Must be reset!
}




