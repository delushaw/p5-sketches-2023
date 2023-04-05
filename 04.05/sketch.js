//slide to see how detailX works
let detailX;
function setup() {
  createCanvas(1000, 1000, WEBGL);
  detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
}

function draw() {
  background(134, 112, 194);
  rotateY(millis() / 1000);
  torus(130, 125, detailX.value(), 7);
  fill(255,215,217)
}