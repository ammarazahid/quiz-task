let score = 0;
let quaideazam = Quaid-e-Azam; 
let fourp =  Four;
let jinnah = Muhammad Ali Jinnah;
let karachi = Karachi;
let mango = Mango;


function quidScore() {
    score += 1;
}

function fourScore() {
    score += 1;
}

function karachiScore() {
    score += 1;
}

function mangoScore() {
    score += 1;
}

function jinnahScore() {
    score += 1;
}

function check() {
    if (quaideazam == true &&
    fourp == true &&
    jinnah == true &&
    karachi == true &&
    mango == true) {
        alert("congratulations!! You did very well. Your score is" + score + "out of 5");
    } else {
        alert("your Score is" + score + "out of 5");
    }
}