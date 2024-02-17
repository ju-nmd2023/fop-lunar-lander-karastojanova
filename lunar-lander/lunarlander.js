let gameStart = true;
let gameRunning = false;
let gameOver = false;
let gameWin = false;
let velocityY = 0.5;
let velocityX = 0.5;
let accelerationX = 0;   // No acceleration along the x-axis
let accelerationY = 0.1;

//Drawing the stars
let stars = [];

//Spacecraft variables
let spacecraftY;
let spacecraftX;

//variables for crush pieces
let crushOneX;
let crushOneY;

let crushTwoX;
let crushTwoY;

let crushThreeX;
let crushThreeY;

let crushFourX;
let crushFourY;

let crushFiveX;
let crushFiveY;

//Creating the canvas
function setup () {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    background(255, 255, 255);
    frameRate(40);

    for (i = 0; i < 300; i++) {
        const star = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            alpha: Math.random(),
        };
    
        stars.push(star);
    }

    spacecraftX = width / 2;
    spacecraftY = 200;

    crushOneX = width / 2;
    crushOneY = height - 110;

    crushTwoX = width / 2;
    crushTwoY = height - 110;

    crushThreeX = width / 2;
    crushThreeY = height - 110;

    crushFourX = width / 2;
    crushFourY = height - 110;
    
    crushFiveX = width / 2;
    crushFiveY = height - 110;
}

//Drawing the moon
function moonTwo() {
    push();
    stroke("white");
    strokeWeight(1);
    fill(200, 210, 200);
    rect(0, height - 100, width, 100);
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
    textSize(100);
    textFont("Futura");
    textAlign(CENTER);
    text("LunarLander", width / 2, height / 2 - 50);
    
}

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
    ellipse(0, 0 - 30, 25, 60);
    pop();

    push();
    fill("darkred");
    translate(x, y);
    rect(0 - 25, 0 - 20, 50, 20, 100, 100, 0, 0);
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
    fill(210, 210, 210);
    stroke(255, 255, 255);
    strokeWeight(1);
    textSize(60);
    textFont("Futura");
    textAlign(CENTER);
    text("Houston, we have a problem..", width / 2, height / 2 - 50);
}

//Restart game button
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

let triangleRotation = 0;

//Crush the spacecraft into pieces
//1CRUSH PIECE
function crushOne() {
    push();
    translate(crushOneX, crushOneY);
    rotate(triangleRotation);
    fill('darkred');
    triangle(0, 0, -20, -10, -12, 13);
    pop();

    triangleRotation = triangleRotation + 0.02;
}

//2CRUSH PIECE
function crushTwo() {
    push();
    translate(crushTwoX, crushTwoY);
    rotate(triangleRotation);
    fill('darkred');
    triangle(+ 10, 0, -10, -15, 5, 10);
    pop();

    triangleRotation = triangleRotation + 0.02;
}

//3CRUSH PIECE
function crushThree() {
    push();
    translate(crushThreeX, crushThreeY);
    rotate(triangleRotation);
    fill('darkred');
    triangle(+ 20, -10, 20, 15, 15, 10);
    pop();

    triangleRotation = triangleRotation + 0.02;
}

//4CRUSH PIECE
function crushFour() {
    push();
    translate(crushFourX, crushFourY);
    rotate(triangleRotation);
    fill('darkred');
    triangle(0, -20, 16, -10, 0, -30);
    pop();

    triangleRotation = triangleRotation + 0.02;
}

//5CRUSH PIECE
function crushFive() {
    push();
    translate(crushFiveX, crushFiveY);
    rotate(triangleRotation);
    fill('darkred');
    triangle(10, -20, 3, -17, 0, -25);
    pop();

    triangleRotation = triangleRotation + 0.02;
}


function gameIsOver() {
    gameStart = false;
    gameRunning = false;
    gameOver = true;
    gameWin = false;

    logo();
    crushOne();
    crushTwo();
    crushThree();
    crushFour();
    crushFive();
    gameOverText();
    restartButton();

    crushOneX = crushOneX - 1;

    crushTwoX = crushTwoX - 1;
    crushTwoY = crushTwoY - 1;

    crushThreeY = crushThreeY - 1;

    crushFourX = crushFourX + 1;
    crushFourY = crushFourY - 0.5;

    crushFiveX = crushFiveX + 1;    
}

//////////////// FOURTH PAGE
//YOU WON TEXT
function gameWonText() {
    fill(210, 210, 210);
    stroke(255, 255, 255);
    strokeWeight(1);
    textSize(60);
    textFont("Futura");
    textAlign(CENTER);
    text("The Eagle has landed!", width / 2, height / 2 - 50);
}

function gameIsWon() {
    gameStart = false;
    gameRunning = false;
    gameOver = false;
    gameWin = true;

    gameWonText();
    restartButton();
    logo();
    spacecraft(spacecraftX, height - 100);
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
        fill(210, 210, 210, Math.abs(Math.sin(star.alpha)) * 255);
        ellipse(star.x, star.y, 2);
        star.alpha = star.alpha + 0.02;
    }

    moonTwo();
    //crushpieces();

    if (gameStart) {
       firstPage();
    }

    if (gameRunning) {
        logo();
        spacecraft(spacecraftX, spacecraftY);

        spacecraftX = spacecraftX + velocityX;
        velocityX = velocityX + accelerationX;

        // Update spacecraft position and velocity on the y-axis
        spacecraftY = spacecraftY + velocityY;
        velocityY = velocityY + accelerationY;

        if (frameCount % 30 === 0) { // Change velocity every 60 frames
            velocityX = random(-1, 1); // Adjust the range based on your preference
        }

        if (keyIsDown(38)) {
            velocityY = velocityY - 0.5;
        }

        fill("white");
        textSize(13);
        text("Speed: " + Math.floor(velocityY), 50, 80);
    }  

    if (spacecraftY > height - 100 && velocityY > 2) {
        gameIsOver();
    }

    if (spacecraftY > height - 100 && velocityY < 2) {
        gameIsWon();
    }
}