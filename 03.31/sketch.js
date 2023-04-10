let c;
let ourFont;
let points;
console.log(profs);


function preload() {
    ourFont = loadFont("Inconsolata_ExtraCondensed-Medium.ttf")
    colorMode(RGB,255);
}
   
    
function setup() {
        c = createCanvas(1000,1000, WEBGL);
        textSize(100);
        textFont(ourFont);


        points = ourFont.textToPoints("DDDD",-300,100,400);
        

        i=0;
        
}

function draw() {
 background(50);   




   //let i = 0;
   //while (i<profs.length) {
    //text (profs [i], 100, (100 *i+100))
    //i=i+1;

   
   
   for(let i=0; i<points.length; i++) {
    fill(random(255),28,94)
    rect(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,60))
}
}



    

   


    




