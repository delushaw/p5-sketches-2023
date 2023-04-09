function setup(){
  createCanvas(1000,1000, WEBGL)
  angleMode(DEGREES)
}

function draw(){
  background(30)

  rotateX(60)

  noFill()
  stroke(255)




for(var i = 0; 1 <50; i++) {

  var r = map(sin(frameCount / 2), -1, 1, 100, 200)
  var g = map(i, 0, 50 , 100, 200)
  var b = map(cos(frameCount), -1, 1, 200, 100)

  stroke(r,g,b)

  rotate(frameCount / 50)

  beginShape()
  for (var j = 0; j < 360; j += 60){
    var rad= 1 * 3
    var x = rad * cos(j)
    var y = rad * sin(j)
    var z= sin(frameCount * 2 + i * 5) * 50

    vertex (x, y, z)
    }
  endShape(CLOSE)
  }
}