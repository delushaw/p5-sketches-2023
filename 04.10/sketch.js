let angle = 0;

let graphics;

let D;

let ourFont;


function preload(){
  ourFont = loadFont('assets/RubikPixels-Regular.ttf');
}

function setup(){

  textFont(ourFont);
  
  createCanvas(1000,1000, WEBGL);
  graphics = createGraphics(200,200);
  graphics.background(255);
  D = createGraphics(200, 200);
  D.fill(231,84,118);
  D.textSize(50);
  D.textAlign(CENTER);
  D.text('D', 150, 50);
}

function draw(){
  background(250,218,221);
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  texture(D);
  stroke(250,218,221);
  box(400);

  angle +=0.03;
}