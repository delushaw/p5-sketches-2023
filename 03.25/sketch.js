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


        points = ourFont.textToPoints("D",100,600,600);

        i=0;
        
}

function draw() {
 //background(255);   





    let ferb= map (mouseX, 0,1000,0,250);
    fill (ferb,255,255);
   // ellipse (mouseX,mouseY,50);
   textSize(mouseY/10)



   //let i = 0;
   //while (i<profs.length) {
    //text (profs [i], 100, (100 *i+100))
    //i=i+1;

   
   
   for(let i=0; i<points.length; i++) {
    fill(random(255),255,255)
    rect(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,60))
}
}



    

   


    




