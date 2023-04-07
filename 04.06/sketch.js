function setup() {
  createCanvas(1000, 1000, WEBGL);
  normalMaterial();
  describe(
    'Camera orbits around a box when mouse is hold-clicked & then moved.'
  );
}
function draw() {
  background(0);
  orbitControl();
  rotateY(0.5);
  box(50,300);
  sphere(150);

  //box(300, 500);
  //sphere(300,500);
}  