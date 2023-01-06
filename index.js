let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

let hCount = 0;
let gCount = 0;

function add1H1() {
    hCount+=1;
    homeScore.textContent = hCount;
}

function add2H1() {
    hCount+=2;
    homeScore.textContent = hCount;
}

function add3H1() {
    hCount+=3;
    homeScore.textContent = hCount;
}

function add1H2() {
    gCount+=1;
    guestScore.textContent = gCount;
}

function add2H2() {
   gCount+=2;
    guestScore.textContent = gCount;
}

function add3H2() {
    gCount+=3;
    guestScore.textContent = gCount;
}

function reset(){
    hCount = 0;
    gCount = 0;
    homeScore.textContent = hCount;
    guestScore.textContent = gCount;
}
