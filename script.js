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
    let correct1 = document.querySelector(".four").checked;
    if (correct1 == true){
     score += 1;
    }
}

function karachiScore() {
    let correct2 = document.querySelector(".karachi").checked;
    if (correct2 == true){
     score += 1;
    }
}

function mangoScore() {
    let correct3 = document.querySelector(".mango").checked;
    if (correct3 == true){
     score += 1;
    }
}

function jinnahScore() {
    let correct4 = document.querySelector(".jinnah").checked;
    if (correct4 == true){
     score += 1;
    }
}

function check() {
    if (score == 5) {
        alert("congratulations!! You did very well. Your score is"  + score +  "out of 5");
    } else if (score < 5){
        alert("your Score is"  + score +   "out of 5");
    } else{
        alert("some thing went wrong!");
    }
}