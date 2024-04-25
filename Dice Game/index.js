var randomNumber1 = Math.floor((Math.random()*6))+1;

var randomNumber2 = Math.floor((Math.random()*6))+1;

var randomDiceSource1 = "images/dice" + randomNumber1 + ".png";

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceSource1);

document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML  = "👑 Player 1 Wins!";
} else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 Wins! 👑";
}else{
    document.querySelector("h1").innerHTML = "🏁 Draw! 🏁";
}