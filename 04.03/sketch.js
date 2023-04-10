let c;


let myFont;
let points
function preload(){
    myFont = loadFont('GreatVibes-Regular.ttf')
}


let t = 0;
function setup() {
    
    c = createCanvas(1000, 1000);
    
    

    
        fill('#64B6AC');
        //myfont.textSize(600);
        textFont(myFont);
        
        //text('fffffs', 10, 500);
      

         points = myFont.textToPoints('D d', 40, 600, 500)

}

function draw() {
    background(274,215,220)
    fill(251,136,190)
    stroke(90)

t=t+0.001;
    noise(t)
    for (let i=0; i<points.length;i++) {
        circle(points[i].x, points[i].y, noise(t*points[i].x)*20)
      }
    
}
