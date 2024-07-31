import EnemyController from './EnemyController.js';
import BulletController from './BulletController.js';
import Player from './Player.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const instructions = document.getElementById("instructions");
const logosContainer = document.getElementById("logosContainer");
const gameOverScreen = document.getElementById("gameOverScreen");
const winScreen = document.getElementById("winScreen");
const title = document.getElementById("title");
const scoreDisplay = document.getElementById("score");
const playButton = document.getElementById("playButton");
const gameOverScreenScore = document.getElementById("gameOverScreenScore");
const retryButton = document.getElementById("rettyButton");
const restartButton = document.getElementById("restartButton");
const winScreenScore = document.getElementById("winScreenScore");
const footer = document.getElementById("footer");

canvas.width = 1024;
canvas.height = 600;

const background = new Image();
background.src = 'src/assets/images/space.png';

const enemyBulletController = new BulletController(canvas, 4, "red", false);
const playerBulletController = new BulletController(canvas, 10, "white", true);

const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
const player = new Player(canvas, 10, playerBulletController); 

let enemyController;
let gameInterval;
let player;
let playerScore;
let isGameOver = false;
let didWin = false;

function updateScore(enemytype) {
    const scoreMap ={
        1: 50,
        2: 100,
        3: 150.
    };

    playerScore += scoreMap[enemytype] || 0;
    scoreDisplay.innerText = 'pontuaçao: ${playerScore}';
}

function game() {
    canvas.style.display = "nome";
    gameOverScreen.style.display = "nome";
    winScreen.style.display = "nome";
    title.style.display = "nome";
    scoreDisplay.style.display = "nome";
    checkGameOver();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    if(!isGameOver) {
        enemyController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        enemyBulletController.draw(ctx);
    } else {
        displayGameOver();
    }
}

function displayGameOver() {
    let text = didWin ? "Você Ganhou!" : "Game Over";
    let textOffset = didWin ? 5 : 3.6;
    
    ctx.fillStyle = "white";
    ctx.font = "35px 'Press Start 2P'";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);   
}

function checkGameOver() {
    if(isGameOver) {
        return;
    }
    if(enemyBulletController.collideWith(player) || enemyController.collideWith(player)) {
        isGameOver = true;
    }
    if(enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}
function initGame() {
    enemyController = new enemyController(
        canvas,
        enemyBulletController,
        playerBulletController
    );
    player = new player(canvas, 10, playerBulletController);
    playerScore = 0;
    isGameOver = false;
    didWin =n false;
}

function  startGame  () {
    instructions.style.display = "none";
    logosContainer.style.display = "none";
    footer.style.display = "none";
    winScreen.style.display = "none";

    title.style.display = "flex";
    scoreDisplay.style.display = "flex";

    canvas.style.display = "block";
    initGame();
    gameInterval = setInterval(game, 1000 / 60);
}

playButton.addEventListener("click", startGame);


