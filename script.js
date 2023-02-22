var diceBtn = document.getElementById("playGameBtn");
diceBtn.addEventListener("click", rollTheDice);
var winnerName = document.getElementById("winnerName");
var p2Dice = document.getElementById("dice2");
var p1Dice = document.getElementById("dice1");


console.log("Output here");

function rollTheDice(){
    winnerName.innerHTML="rolling...";
    var p1 = Math.floor(Math.random() * 6 + 1);
    var p2 = Math.floor(Math.random() * 6 + 1);
    setTimeout(function () {
        p1Dice.src = switchCase(p1)
        p2Dice.src = switchCase(p2);

        if (p1 == p2) {
            winnerName.innerHTML = "Draw Match!";
        } else if (p1 > p2) {
            winnerName.innerHTML = document.getElementById("player1").id + " Wins";
        } else {
            winnerName.innerHTML = document.getElementById("player2").id + " Wins";
        }
    },1000);
}
function switchCase(x) {
    switch (x) {
        case 1: return "images/one.png";
            break;
        case 2: return "images/two.png";
            break;
        case 3: return "images/three.png";
            break;
        case 4: return "images/four.png";
            break;
        case 5: return "images/five.png";
            break;
        case 6: return "images/six.png";
    }
}
