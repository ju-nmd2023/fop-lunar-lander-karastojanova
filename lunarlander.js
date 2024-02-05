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

//LOGO
function logo () {
    fill("darkred");
    stroke(255, 255, 255);
    strokeWeight(0.5);
    textSize(19);
    textFont("Futura");
    text("LunarLander", 20, 40);
}

//BIG LOGO for start page
function biglogo() {
    fill("darkred");
    stroke(255, 255, 255);
    strokeWeight(1);
    textSize(60);
    textFont("Futura");
    text("LunarLander", 130, 190);
    
}

//Button to start the game
function startGameButton () {
    let button = createButton("Start Game");
    button.position(width / 2 -25, height / 2);

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


function draw () {
    canvas();
    background(0,0,29);

    for (let star of stars) {
        noStroke();
        fill(255, 255, 255, 100);
        ellipse(star.x, star.y, 2);
    }

    //logo();
    biglogo();
    moon();

    startGameButton();
    //spacecraft(spacecraftX, spacecraftY);
}