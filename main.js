function preload(){
canvas=createCanvas(300,300);
canvas.center()
background("pink");


}
function draw(){
    strokeWeight(5);
    stroke("blue");
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);

    }
}
function clearcanvas(){
    background("white");
}