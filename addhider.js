var hyperlinkeventlist = document.querySelectorAll("a");
var i;
for (i = 0; i < hyperlinkeventlist.length; i++) {
    if(hyperlinkeventlist[i].innerHTML == "Hide")
    {
        hyperlinkeventlist[i].click();
    }
}

