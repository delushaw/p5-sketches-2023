let x= 200;
let y= 200;
let extraCanvas;



function setup() {
    createCanvas(1000,1000);
    extraCanvas= createGraphics(1000,1000);
    extraCanvas.clear();
    background (0);
}

function draw() {

    //background (0);
    x += random(-10, 10);
    y += random(-10, 10);
    fill (255, 200);
    stroke(155);
    rectMode (CENTER);
    rect (x, y, 20, 20);

}

    if (mouseIsPressed) {
    extraCanvas.fill (255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, MouseY, 60, 60);
    

}


image(extraCanvas, 0, 0);
