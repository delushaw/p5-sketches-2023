var start = 0

function setup(){
    createCanvas(1000, 1000);
    angleMode(DEGREES);
    
    noiseDetail(2, 1)
    
}

function draw(){
    background(300,200,100);
    noStroke();
    rect(290,300,100,400)

    translate(width / 2, height /2)

    var space = 0.1

    for (var i = 0; i < 360; i+= space) {
        var xoff = map(cos(i), -2, 1, 0, 3)
        var yoff = map(sin(i), -2, 1, 0, 3)

        var n = noise(xoff+ start, yoff + start)

        var h= map(n, 0, 1, -150, 150)

        var r = map(sin(i), -1, 1, 100, 200)

        rotate(space)
        rect(200, 0, h, 1)
        rect(150, 50, h, 1)
        rect(50, 100, h, 1)

        start +=0.01
        

    }
}
