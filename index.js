var randomNumber1 = Math.floor(Math.random() * (6 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1) + 1);
var dice1 = document.querySelector("#dice1");
var dice2 = document.querySelector("#dice2");
dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

function winner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("#results").innerHTML = "Player 1 is the winner!";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("#results").innerHTML = "It's a tie! Refresh the page to try again."
    } else {
        document.querySelector("#results").innerHTML = "Player 2 is the winner!";
    }
}

winner();