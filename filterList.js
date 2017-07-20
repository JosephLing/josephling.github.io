//check whether or not css can do this when it is selected or not.....

var list = "category-list";
var BUTTONS = "categoryButton";
var RESET = "reset"

function setList(newList){
    list = newList;
}

//used for when we load the page and we need to validate whether or the ?=option is a valid button
function submitButtonChecked(nameOfId){
    var buttons = document.getElementsByClassName(BUTTONS);
    var found = false;
    var count = 0;
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
    var getCategories = document.getElementsByClassName("list");
    if (getCategories.length != 0){
        if (divId == RESET){
            for(var i = 0; i < getCategories.length; i++) {
                getCategories[i].style.display = "block";
            }
        }else{
            for(var i = 0; i < getCategories.length; i++) {
                console.log(getCategories[i].id);
                if (divId === getCategories[i].id){
                    getCategories[i].style.display = "block";
                }else{
                    getCategories[i].style.display = "none";
                }
            }
        }
    }else{
        console.log("nothing found in list");
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
    console.log("checking")
    var buttons = document.getElementsByClassName(BUTTONS);
    for(var i=0; i<buttons.length; i++){
        buttons[i].removeAttribute("id"); // O(N) complexity a bit slow but can potentailly speed up later
    }
    element.setAttribute("id", "checked");
}

// this runs when the page loads
function OnPageLoadFilter(){
    var url = window.location.href;
    var loc = window.location.href.search("=");
    if (loc != -1){ //                              checks if ?type= exists 
        var option = url.slice(loc+1, url.length);
        displayCategories(option);
        if (!submitButtonChecked(option)){
            console.log("error in setting check box")
        }
    }
}
    