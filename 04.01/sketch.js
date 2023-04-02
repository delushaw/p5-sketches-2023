function setup() {
    createCanvas (1000, 1000);
    angleMode(DEGREES);
}

function draw (){
    background (166,174,296);

    rect(100,250,100,600)
    let hr = hour();
    let mn = minute();
    let sc = second();
    

    strokeWeight(8);    
    stroke (250, 155, 200);
    noFill(0);
    let end = map (hr, mouseX, 0, width, 0, 360);
    triangle(200, 250, 400, 600, 0, end);

    stroke(169,237,234)
    let end2 = map (mn, mouseX, 0, width, 0, 360);
    arc(200, 250, 400, 600, 0, end2);

    stroke(111, 222, 299)
    let end3 = map (sc, mouseX, 0, width, 0, 360);
    rect(200, 250, 400, 600, 0, end3);

}



    

   


    




