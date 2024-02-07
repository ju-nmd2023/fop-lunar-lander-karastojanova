let gameStart = true;
let gameRunning = false;
let gameOver = true;
let gameWin = true;
let velocity = 0.5;

//Creating the canvas
function canvas () {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
}

//Drawing the stars
let stars = [];

 for (i = 0; i < 300; i++) {
    const star = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        alpha: Math.random(),
    };

    stars.push(star);
}

//Drawing the moon
function moon() {
    push();
    stroke("white");
    strokeWeight(1);
    fill(200, 210, 200);
    beginShape();
    vertex(-50, 500);
    bezierVertex(-50, 400, width + 50, 400, width + 50, 500);
    endShape();
    pop();

    push();
    noStroke();
    fill(90, 90, 90, 70);
    ellipse(200, 450, 30, 10);
    ellipse(60, 460, 30, 10);
    ellipse(130, 455, 30, 10);
    ellipse(400, 460, 30, 10);
    ellipse(275, 455, 30, 10);
    ellipse(500, 455, 30, 10);
    ellipse(350, 440, 30, 10);
    pop();
}


/////////////////////
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
function setup() {
    biglogo();
    startGameButton();
}

///////////////////
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
let spacecraftX = width / 2;
let spacecraftY = height / 2;

function spacecraft(x, y) {
    push();
    fill("darkred");
    translate(x, y);
    ellipse(0, -60, 25, 60);
    pop();

    push();
    fill("darkred");
    beginShape();
    translate(x, y);
    vertex(-25, -30);
    bezierVertex(-25, -55, 25, -55, 25, -30);
    endShape();
    pop();

    push();
    fill(0,0,29);
    beginShape();
    translate(x, y);
    vertex(25, -30);
    bezierVertex(25, -40, 0, -40, 0, -35);
    bezierVertex(0, -40, -25, -40, -25, -30);
    endShape();
    pop();
}

//FUCTION FOR SECOND PAGE
//function secondPage() {
   // logo();
    //spacecraft(spacecraftX, spacecraftY);
//}

function beginGame () {
    gameStart = false;
    gameRunning = true;
    gameOver = false;
    gameWin = false;
}

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
  }

function draw () {
    canvas();
    background(0,0,29);

    for (let star of stars) {
        noStroke();
        fill(255, 255, 255, 100);
        ellipse(star.x, star.y, 2);
    }

    moon();

    if (gameStart) {
       setup();
    }

    if (gameRunning) {
        logo();
        spacecraft(spacecraftX, spacecraftY);

        spacecraftY = spacecraftY + velocity;
        velocity = velocity + 0.01;

        if (keyIsDown(38)) {
            velocity = velocity - 0.05;
        }
    }   
}
