let c;
let ourFont;
let points;
console.log(profs);


function preload() {
    ourFont = loadFont("Inconsolata_ExtraCondensed-Medium.ttf")
    colorMode(RGB,255);
}
   
    
function setup() {
        c = createCanvas(1400,850);
        textSize(100);
        textFont(ourFont);


        points = ourFont.textToPoints("DDDDD",100,600,600);
        

        i=0;
        
}

function draw() {
 background(182,123,259);   




   //let i = 0;
   //while (i<profs.length) {
    //text (profs [i], 100, (100 *i+100))
    //i=i+1;

   
   
   for(let i=0; i<points.length; i++) {
    fill(random(295),127,214)
    rect(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,60))
}
}



    

   


    




