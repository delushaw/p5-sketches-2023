let c;
let ourFont;



function preload() {
    ourFont = loadFont("Lobster-Regular.ttf")
    colorMode(HSB,255);
}
   
    
function setup() {
        c = createCanvas(1000,1000);
        textSize(100);
        textFont(ourFont);
        
}
function draw() {
 background(255);   




    let ferb= map (mouseX, 0,1000,0,250);
    fill (ferb,255,255);
   // ellipse (mouseX,mouseY,50);
   textSize(mouseY/10)
   text ("D", 800, 500)
}


    

   


    




