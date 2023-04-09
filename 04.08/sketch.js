function setup() {
  createCanvas(1000, 1000);
  noFill();
  strokeWeight(2)
}

function draw() {
  background(50);
  stroke(174,363,262)
  let t = map(mouseX, 0, width, -5, 5);
  curveTightness(t);
  beginShape();
  scale(8)
  curveVertex(-110, -190);
  curveVertex(-110, 200);
  curveVertex(93, 50);
  curveVertex(13, 61);
  curveVertex(50, 35);
  curveVertex(25, 65);
  endShape();
  
}
