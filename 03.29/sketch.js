

var x =0;
var speed= 5;

function setup(){
  createCanvas(1000, 1000);
}

function draw(){
  background(205,261,163);
  stroke(255);
  strokeWeight(4);
  fill(251,138,215);
  ellipse(x,500,500,500);
  rect(x,100,250,650,50);
  

  if (x>width){
    x = x -3;
  }
  x = x + speed;
}



  background(205,261,163);
  stroke(255);
  strokeWeight(4);
  fill(251,138,215);
  ellipse(x,500,500,500);
  rect(x,100,250,650,50);