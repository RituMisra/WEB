function like() {
    let h1CounterTag = document.querySelector("#likecounter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1 ;
    h1CounterTag.innerHTML = newValue;
}

function dislike() {
    let h1CounterTag = document.querySelector("#dislikecounter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1 ;
    h1CounterTag.innerHTML = newValue;
}

function changeview(p1) {
    let imgTag = document.querySelector("#imgid");

    if(p1 == 1) {
        imgTag.setAttribute("src", "1.webp");
    } else if (p1 == 2) {
        imgTag.setAttribute("src","2.webp");
    } else if (p1 == 3) {
        imgTag.setAttribute("src","3.webp");
    }
}
