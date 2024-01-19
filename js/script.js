var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var xRandom;
var yRandom;

ctx.fillStyle = "lightgrey";
ctx.fillRect(0,0,600,400);

function drawTarget(x,y) {
    drawCircle(x,y,3,"red");
    drawCircle(x,y,2,"white");
    drawCircle(x,y,1,"red");
}

function drawCircle(x,y,r,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,10*r,0,2*Math.PI);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.arc(x,y,10*r,0,2*Math.PI);
    ctx.stroke();
}

function moveTarget(max) {
    return Math.floor(Math.random()*max);
}
//El n° max que me puede dar MATH.RANDOM es "1". 
// Si lo multiplico por 600("x" max del canvas), el objetivo no va a salir del mismo.


function clearCanvas(){
    ctx.clearRect(0,0,600,400);
}

function reloadPage(){
    clearCanvas();
    xRandom = moveTarget(580);	
    yRandom	= moveTarget(380);
    drawTarget(xRandom,yRandom);
}

setInterval(reloadPage,1000);

function shoot(event) {
    x = event.pageX - canvas.offsetLeft;
    y = event.pageY - canvas.offsetTop;
    if ((x<xRandom+10) && (x>xRandom-10) && (y<yRandom+10) && (y>yRandom-10)) {
        alert("Nailed it!");
    }
}

canvas.onclick = shoot;



