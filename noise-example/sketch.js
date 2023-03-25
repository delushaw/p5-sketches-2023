let c;
let ourFont;
//let profs= ["ali", "diane", "craig", "nancy", "roderick", "sadie", "richard"]
let points;
console.log(profs);


function preload() {
    ourFont = loadFont("Lobster-Regular.ttf")
    colorMode(HSB,255);
}
   
    
function setup() {
        c = createCanvas(1500,1500);
        textSize(100);
        textFont(ourFont);


        points = ourFont.textToPoints("GD2",100,600,600);

        i=0;
        
    noStroke;
    fill (0)
}

function draw() {
 f++;

 
 
    background(255);   
    ellipse (200,200,random(400))
    
    ellipse (600,200,random(400))

}



    

   


    




