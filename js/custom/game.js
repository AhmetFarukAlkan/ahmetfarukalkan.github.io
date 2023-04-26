var gameBoard = document.getElementById("game-board");
var score = document.getElementById("score");
var message = document.getElementById("message");
var fruits = ["apple", "banana", "cherry", "grape", "orange"];
var counter = 0;

function createFruit() {
    var fruit = document.createElement("div");
    var randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    fruit.classList.add("fruit", "fruit-" + randomFruit);
    fruit.style.top = Math.floor(Math.random() * (gameBoard.offsetHeight - fruit.offsetHeight - 50)) + "px";
    fruit.style.left = Math.floor(Math.random() * (gameBoard.offsetWidth - fruit.offsetWidth - 50)) + "px";
    fruit.addEventListener("click", function() {
        gameBoard.removeChild(fruit);
        counter++;
        score.innerHTML = "Score: " + counter;
        if (counter === 20) {
            message.innerHTML = "winner winner chicken dinner!";
            gameBoard.removeEventListener("click", clickHandler);
        }
    });
    gameBoard.appendChild(fruit);
}

function clickHandler() {
    createFruit();
}

gameBoard.addEventListener("click", clickHandler);
