//initialize the count as 0
let count =0;
//listen for clicks on the increment button
let countEl = document.getElementById("count-el");//pass in arguments
countEl.innerText=count;
function increment(){
    //increment the count variable when the button is clicked
    count = count+1;
    //change the count-el in the HTML to reflect the new count
    countEl.innerText=count;
}
let saveEl = document.getElementById("save-el");
function save(){
    saveEl.textContent+=count+" - ";
    count=0;
    countEl.innerText=count;
}

