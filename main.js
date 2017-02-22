function submitButtonChecked(nameOfId){
    var buttonId = document.getElementById("button"+nameOfId);
    if (buttonId === null || buttonId == null){
        console.log("error in grabbing element");
    }else{
        buttonId.style.backgroundColor = "black";
        buttonId.style.color = "white";
    }
}

function filterOptions(list){
    var url = window.location.href;
    var loc = window.location.href.search("=");
    if (loc != -1){ //                              checks if ?type= exists 
        var divId = url.slice(loc+1, url.length);
        if(divId == "all") {
            submitButtonChecked("All");
        } else {
            console.log("asdf");
            var displayId = document.getElementById(divId);
            if (displayId != null ){ //             check if it is a valid category
                console.log("asdf");    
                var getCategories = document.getElementById(list).getElementsByTagName("div");
                for(var i = 0; i < getCategories.length; i++) {
                    if (divId === getCategories[i].id){
                        getCategories[i].style.display = "all";
                    }else{
                        getCategories[i].style.display = "none";
                    }
                }
                submitButtonChecked(divId);
            }
        }
    }else{
        // No category has been selected so we are displaying all values. 
        // Therefore 'All' button should be checked.
        submitButtonChecked("All");
    }
}