function setup() {
    createCanvas (1000, 1000);
    angleMode(DEGREES);
}

function draw (){
    background (0);

    rect(100,250,100,600)
    let hr = hour();
    let mn = minute();
    let sc = second();
    

    strokeWeight(8);    
    stroke (150, 255, 100);
    noFill(0);
    let end = map (hr, mouseX, 0, width, 0, 360);
    rect(200, 250, 400, 600, 0, end);

    stroke(219,242,291)
    let end2 = map (mn, mouseX, 0, width, 0, 360);
    rect(200, 250, 400, 600, 0, end2);

    stroke(255, 100, 150)
    let end3 = map (sc, mouseX, 0, width, 0, 360);
    rect(200, 250, 400, 600, 0, end3);

    

  

    
    
    //150, 255, 100 green
    //255, 100, 150 pink
    //219,242,291 blue
    //150, 100, 255 purple
  






    //fill(255);
    //noStroke();
    //text(hr + ':' + mn + ':' + sc, 10, 200);






}



    

   


    




