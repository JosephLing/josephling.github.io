//check whether or not css can do this when it is selected or not.....

let list = "category-list";
const BUTTONS = "categoryButton";
const RESET = "reset"

function setList(newList){
    list = newList;
}

//used for when we load the page and we need to validate whether or the ?=option is a valid button
function submitButtonChecked(nameOfId){
    const buttons = document.getElementsByClassName(BUTTONS);
    let found = false;
    let count = 0;
    while (!found && count<buttons.length){
        if (buttons[count].value == nameOfId){
            found = true;
        }else{
            count ++;
        }
    }
    if (found){
        setButtonToChecked(buttons[count]);
    }
    return found;
}

// filters the dispaly of everything in class='list'
function displayCategories(divId){
    const getCategories = document.getElementsByClassName("list");
    if (getCategories.length != 0){
        if (divId == RESET){
            for(let i = 0; i < getCategories.length; i++) {
                getCategories[i].style.display = "block";
            }
        }else{
            for(let i = 0; i < getCategories.length; i++) {
                if (divId === getCategories[i].id){
                    getCategories[i].style.display = "block";
                }else{
                    getCategories[i].style.display = "none";
                }
            }
        }
    }
}

// this runs when you press a button.
function OnButtonClick(element){
    // grabs context of this
    if (element != null){
        if (element.value != null){
            displayCategories(element.value);
            setButtonToChecked(element);
        }
    }
}

// sets button to checked and flips the rest
function setButtonToChecked(element){
    const buttons = document.getElementsByClassName(BUTTONS);
    for(let i=0; i<buttons.length; i++){
        buttons[i].removeAttribute("id"); // O(N) complexity a bit slow but can potentailly speed up later
    }
    element.setAttribute("id", "checked");
}

// this runs when the page loads
function OnPageLoadFilter(){
    const url = window.location.href;
    const loc = window.location.href.search("=");
    if (loc != -1){ //                              checks if ?type= exists 
        const option = url.slice(loc+1, url.length);
        displayCategories(option);
        if (!submitButtonChecked(option)){
            console.error("error in setting check box")
        }
    }
}
    