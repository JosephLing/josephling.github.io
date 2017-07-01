
//check whether or not css can do this when it is selected or not.....

var list = "category-list";

var RESET = "reset"


function submitButtonChecked(nameOfId){
    var buttons = document.getElementsByClassName("categoryButtons");
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

function displayCategories(divId){
    var getCategories = document.getElementsByClassName("list");
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
}

function filterOptions(divId){
    console.log("filtering options based off" + divId);
    if(divId == RESET) {
        console.log("resetting");
        submitButtonChecked(RESET);
    } else {
        displayCategories(divId);
    }
}

// this runs when you press a button.
function OnButtonClick(element){
    // grabs context of this
    if (element != null){
        if (element.value != null){
            filterOptions(element.value);
            setButtonToChecked(element);
        }
        // console.log(element);
        // filterOptions(element);
    }

}


function setButtonToChecked(element){
    var buttons = document.getElementsByClassName("categoryButton");
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
        filterOptions(option);
        if (!submitButtonChecked(option)){
            console.log("error in setting check box")
        }

    }else{
        // No category has been selected so we are displaying all values. 
        // Therefore 'All' button should be checked.
        // if (!submitButtonChecked(option)){
        //     console.log("error in setting check box")
        // }
    }
}
