filterSelection("all")

function filterSelection(f) {
    var fitems, i;
    fitems = document.getElementsByClassName("fltitm");
    if (f == "all") {
        f = "";
    }
    // add "show" class to filtered elts and remove "show" from elts not selected
    for (i = 0; i < fitems.length; i++) {
        remClass(fitems[i], "show");
        if (fitems[i].className.indexOf(f) > -1) {
            addClass(fitems[i], "show");
        }
    }
}

// show filtered elements
function addClass(elt, name) {
    var i, currClasses, keys;
    currClasses = elt.className.split(" ");
    keys = name.split(" ");
    for (i = 0; i < keys.length; i++) {
        // insert key back in if not in yet, for all keys in name passed
        if (currClasses.indexOf(keys[i]) == -1) {
            elt.className += " " + keys[i];
        }
    }
}

// hide unselected elements
function remClass(elt, name) {
    var i, currClasses, keys;
    currClasses = elt.className.split(" ");
    keys = name.split(" ");
    for (i = 0; i < keys.length; i++) {
        // arr.splice(index, count to be removed [opt], items to be added [opt])
        while (currClasses.indexOf(keys[i]) > -1) {
            currClasses.splice(currClasses.indexOf(keys[i]), 1);
        }
    }
    // reconstitute classes without the removed classes
    elt.className = currClasses.join(" ");
}

// highlight active class
var filterContainer = document.getElementById("filterSelect");
var filters = filterContainer.getElementsByClassName("flt");
console.log(filters);
for (var i = 0; i < filters.length; i++) {
    // for each in filters, add event listeners for clicks to trigger active-ness
    filters[i].addEventListener("click", function() {
        var curr = document.getElementsByClassName("active");
        curr[0].className = curr[0].className.replace(" active", "");
        this.className += " active";
    })
}