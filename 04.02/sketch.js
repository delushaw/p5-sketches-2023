let c;


let myFont;
let points
function preload(){
    myFont = loadFont('RubikPixels-Regular.ttf')
}


let t = 0;
function setup() {
    
    c = createCanvas(1000, 1000);
    
    

    
        fill('#82EEFD');
        textFont(myFont);

         points = myFont.textToPoints('D', 200, 750, 800);

          

    
    //rect(100,100,50,300)
    //ellipse(400, 200, 500)

}

function draw() {
    background(235,127,80)
    // noFill();
    // strokeWeight(10)
    // stroke(mouseX,mouseY,0)

    // rect(50,50,mouseX,mouseY)

t=t+0.001;
    noise(t)
    for (let i=0; i<points.length;i++) {
        rect(points[i].x, points[i].y, noise(t*points[i].x)*40)
        circle(points[i].x, points[i].y, noise(t*points[i].x)*40)
      }
      
      
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}