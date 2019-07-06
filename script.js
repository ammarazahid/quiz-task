let score = 0;
// let quaideazam = Quaid-e-Azam; 
// let fourp =  Four;
// let jinnah = Muhammad Ali Jinnah;
// let karachi = Karachi;
// let mango = Mango;


function quidScore() {
   let correct = document.querySelector(".quideazam").checked;
   if (correct == true){
    score += 1;
   }
}

function fourScore() {
    let correct = document.querySelector(".four").checked;
    if (correct == true){
     score += 1;
    }
}

function karachiScore() {
    let correct = document.querySelector(".karachi").checked;
    if (correct == true){
     score += 1;
    }
}

function mangoScore() {
    let correct = document.querySelector(".mango").checked;
    if (correct == true){
     score += 1;
    }
}

function jinnahScore() {
    let correct = document.querySelector(".jinnah").checked;
    if (correct == true){
     score += 1;
    }
}

function check() {
    if (score == 5) {
        alert("congratulations!! You did very well. Your score is"  + score +  "out of 5");
    } else {
        alert("your Score is"  + score +   "out of 5");
    }
}