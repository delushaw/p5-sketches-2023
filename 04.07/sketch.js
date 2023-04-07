function setup() {
  createCanvas(1000, 1000, WEBGL);
  setAttributes('antialias', true);
}
function draw() {
  orbitControl();
  background(40);
  strokeWeight(4);
  stroke(255);
  

  strokeWeight(4);
  noFill();
  stroke(325,263,99)

  beginShape();
  vertex(-125, 130);
  bezierVertex(125, 130, 125, -130, -125, -130);
  endShape();

  beginShape();
  vertex(-125, 130, 125);
  bezierVertex(125, 130, 125, 125, -130, 120, -125, -130, 120);
  endShape();

strokeWeight(4);
stroke(299,125,179)
beginShape(LINES);
vertex(-110, -190);
vertex(-110, 200);

endShape();
}