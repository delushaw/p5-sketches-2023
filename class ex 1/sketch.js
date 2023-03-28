frame=0
let vid;

function stepup(){
  c= createCanvas (1000,1000);

  vid=createCapture(VIDEO);
  vid,size(640,480);
  frameRate(60)
  frameRate(5)
  for (let i=0;i<innerWidth;i++) {

    let yPosition = sin(i/10)*1000

    vertex(i,yPosition)

    endShape()
  }
  
}

function draw(){
  angleMode(DEGREES)
  ellipseSize= sin(frame/20)*200;

  translate(500,500);
  push()
  rotate(sin(frame/20)*1000)
  ellipse (500,500,ellipseSize)
  console.log(sin(frame))

  

frame++
}