let x, y, r, g, b;

function setup(){
    createCanvas(1000,1000);
    background(200);
}

function draw(){
    r = random(255);
    g = 0;
    b = random(255);
    x = random(width);
    y = random(height);
    noStroke();
    fill(r, g, b, 300);
    rect(x, y, 30, -70, 400);
    circle(x, y, -60, 400);



}



    

   


    




