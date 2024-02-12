let gameStart = true;
let gameRunning = false;
let gameOver = false;
let gameWin = false;
let velocity = 0.5;

//Drawing the stars
let stars = [];

//Spacecraft variables
let spacecraftY;
let spacecraftX;

//Creating the canvas
function setup () {
    let cnv = createCanvas(1200, 700);
    background(255, 255, 255);

    for (i = 0; i < 300; i++) {
        const star = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            alpha: Math.random(),
        };
    
        stars.push(star);
    }

    spacecraftX = width / 2;
    spacecraftY = height / 2;
}

//Drawing the moon
function moon() {
    push();
    stroke("white");
    strokeWeight(1);
    fill(200, 210, 200);
    beginShape();
    vertex(-50, moonY);
    bezierVertex(-50, 430, width + 50, 430, width + 50, moonY);
    endShape();
    pop();

    push();
    noStroke();
    fill(90, 90, 90, 70);
    ellipse(200, height - 50, 30, 10);
    ellipse(60, height - 30, 30, 10);
    ellipse(130, height - 40, 30, 10);
    ellipse(400, height - 30, 30, 10);
    ellipse(275, height - 40, 30, 10);
    ellipse(490, height - 40, 30, 10);
    ellipse(330, height - 50, 30, 10);
    ellipse(560, height - 30, 30, 10);
    pop();
}

function moonTwo() {
    push();
    stroke("white");
    strokeWeight(1);
    fill(200, 210, 200);
    rect(0, 600, width, 100);
    pop();
}

///////////////////// FIRST PAGE
//Button to start the game
function startGameButton () {
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255);
    rect(width / 2 - 45, height / 2, 90, 30, 3, 3, 3, 3);

    fill(0, 0, 0);
    noStroke();
    textSize(14);
    textFont("Arial");
    textAlign(CENTER);
    text("Start Game", width / 2, height / 2 + 20);
}

//BIG LOGO for start page
function biglogo() {
    fill("darkred");
    stroke(255, 255, 255);
    strokeWeight(1);
    textSize(60);
    textFont("Futura");
    textAlign(CENTER);
    text("LunarLander", width / 2, height / 2 - 50);
    
}

//FIRST PAGE FUNCTION
function firstPage() {
    biglogo();
    startGameButton();
}

/////////////////// SECOND PAGE
//LOGO
function logo () {
    fill("darkred");
    stroke(255, 255, 255);
    strokeWeight(0.5);
    textSize(19);
    textFont("Futura");
    text("LunarLander", 70, 40);
}

//Drawing the spacecraft
function spacecraft(x, y) {
    push();
    fill("darkred");
    translate(x, y);
    ellipse(0, 0, 25, 60);
    pop();

    push();
    fill("darkred");
    translate(x, y);
    rect(0 - 25, 0 + 10, 50, 20, 100, 100, 0, 0);
    pop();
}

function beginGame () {
    gameStart = false;
    gameRunning = true;
    gameOver = false;
    gameWin = false;
}

////////////////// THIRD PAGE
//GAME OVER TEXT
function gameOverText() {
    fill("darkred");
    stroke(255, 255, 255);
    strokeWeight(1);
    textSize(60);
    textFont("Futura");
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2 - 50);
}

function restartButton() {
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255);
    rect(width / 2 - 55, height / 2, 110, 30, 3, 3, 3, 3);

    fill(0, 0, 0);
    noStroke();
    textSize(14);
    textFont("Arial");
    textAlign(CENTER);
    text("Restart Game", width / 2, height / 2 + 20);
}

function gameIsOver() {
    gameStart = false;
    gameRunning = false;
    gameOver = true;
    gameWin = false;

    gameOverText();
    restartButton();
}

//////////////// FOURTH PAGE
//YOU WON TEXT
function gameWonText() {
    fill("darkred");
    stroke(255, 255, 255);
    strokeWeight(1);
    textSize(60);
    textFont("Futura");
    textAlign(CENTER);
    text("You Won", width / 2, height / 2 - 50);
}

function gameIsWon() {
    gameStart = false;
    gameRunning = false;
    gameOver = false;
    gameWin = true;

    gameWonText();
    restartButton();
}

////////////// STARTING TO DRAW EVERYTHING
function mousePressed() {
    if (
      mouseX > width / 2 - 45 &&
      mouseX < width / 2 + 45 &&
      mouseY > height / 2 &&
      mouseY < height / 2 + 30 &&
      gameStart
    ) {
      beginGame();
    }

    if (
        mouseX > width / 2 - 55 &&
        mouseX < width / 2 + 55 &&
        mouseY > height / 2 &&
        mouseY < height / 2 + 30
    ) {
        // Reset relevant variables and set the game state to gameRunning
        spacecraftY = height / 2;
        velocity = 0.5;
        gameRunning = true;
        gameOver = false;
        gameWin = false;
    }
  }

function draw () {
    background(0,0,29);

    for (let star of stars) {
        noStroke();
        fill(255, 255, 255, 100);
        ellipse(star.x, star.y, 2);
    }

    moonTwo();

    if (gameStart) {
       firstPage();
    }

    if (gameRunning) {
        logo();
        spacecraft(spacecraftX, spacecraftY);

        spacecraftY = spacecraftY + velocity;
        velocity = velocity + 0.1;

        if (keyIsDown(38)) {
            velocity = velocity - 0.5;
        }

        fill("white");
        textSize(13);
        text("Speed: " + Math.floor(velocity), 50, 80);
    }  

    if (spacecraftY > 600) {
        gameIsOver();
    }

}