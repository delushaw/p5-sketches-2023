let c;


let myFont;
let points
function preload(){
    myFont = loadFont('Tillana-SemiBold.ttf')
}


let t = 0;
function setup() {
    
    c = createCanvas(750,750);
    
    

    
        fill('#FFFFCC');
        textFont(myFont);

         points = myFont.textToPoints('D', 10, 700, 800);

          

    
    //  background(0)
    //rect(100,100,50,300)
    //ellipse(400, 200, 500)

}

function draw() {
    background(214,215,190)
    // noFill();
    // strokeWeight(10)
    // stroke(mouseX,mouseY,0)

    // rect(50,50,mouseX,mouseY)

t=t+0.001;
    noise(t)
    for (let i=0; i<points.length;i++) {
        rect(points[i].x, points[i].y, noise(t*points[i].x)*50)
        circle(points[i].x, points[i].y, noise(t*points[i].x)*50)
      }
      
      
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}