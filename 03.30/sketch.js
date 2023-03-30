var x =0;
var speed= 5;

function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(205,261,163);
  stroke(255);
  strokeWeight(4);
  fill(251,138,215);
  ellipse(x,200,105,100);
  rect(x,100,50,150, 150);
  

  if (x>width){
    x = x -3;
  }
  x = x + speed;
}