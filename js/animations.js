console.log("js was called!")

function runTyper() {
    let i = 0;
    const elt = document.getElementsByClassName("typer")[0];
    const txt = elt.textContent; // selects first "typer" which should be the splash in all cases hopefully
    const formattedText = elt.innerHTML; //contains format tags
    let speed = 35; // duration between letters in ms
    // console.log(txt);

    // load with no text
    elt.innerHTML = "";

    // typing animation
    let typeIntId = setInterval(typer, speed);

    // replace with formatted text once animated
    setTimeout(function() {
        clearInterval(typeIntId);
        elt.innerHTML = formattedText;
    }, (speed * txt.length - 200));
    
    // typer function
    function typer() {
        if (i < txt.length) {
            // console.log("typer called with " + txt);
            elt.innerHTML += txt.charAt(i);
            i++;
            // setTimeout(typer, speed);
        }
    }

    console.log("runTyper done");
}


