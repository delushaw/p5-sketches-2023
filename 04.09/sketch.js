function setup() {
  createCanvas(1000, 1000, WEBGL);
  noStroke();
  describe('torus with specular material');
}

function draw() {
  background(20);
  fill(316,174,278)
  ambientLight(30);

  // add point light to showcase specular material
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 50);

  specularMaterial(90);
  shininess(50);
  torus(90, 40, 94, 94);
  torus(-90, 40, 94, 94);
  torus(600, 40, 94, 94);
  rect(-190, -140, 140, 290, 300);
  


}