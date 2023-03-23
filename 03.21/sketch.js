let c;



function setup(){
    c = createCanvas(1000,1000)
    //background (0)
    background(90,50,70);

    //rect(100,100,100,300)
    //rect(250,100,100,300)
    //rect(350,100,100,300)
    //rect(650,100,100,300)


    
}


function draw() {


    rect(50,50,mouseX,mouseY);
    stroke (mouseX,mouseY,50);
    strokeWeight(5);
    noFill ();
    
}

function mousePressed (){
    saveCanvas (c, "03.21", "png");
}



//anything you put in draw will happen over and over again

