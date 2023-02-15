let canvas = document.getElementById("gameCanvas");
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
//let canvasButton = document.getElementById("canvasButton").valueAsNumber;

let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");
let herox = 1;
let heroy = 2;

let context1 = canvas.getContext("2d");
let heroa = 1;
let herob = 2;

let img = new Image();
img.src = "morski shag krug.png"
context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
//context.fillRect(herox * sqsize, heroy * sqsize, sqsize, sqsize);


let img1 = new Image();
img1.src = "morski shah1.png"
context.drawImage(img1, heroa * sqsize, herob * sqsize, sqsize, sqsize);

function drawMapAndHero(){
//izchistwane na platnoto
    //context.fillStyle = "purple";
    //context.fillRect(0, 0, canvasWidth * sqsize, canvasHeight * sqsize);
    
    //risuwane na geroq
    context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
    context.drawImage(img, heroa * sqsize, herob * sqsize, sqsize, sqsize);
    
    
    //risuwane na mrejata
    for(let i = 0; i < canvasWidth; i++) {
      for(let j = 0; j < canvasHeight; j++) {
            context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
		}
	}
}


drawMapAndHero();

canvas.onclick = function(e) {
//koordinati na mishkata v pikseli
    let mousePosX = e.x - e.originalTarget.offsetLeft;
    let mousePosY = e.y - e.originalTarget.offsetTop;
    
    //koordinati na mishkata v kwadratchetata na kartata
    herox = Math.floor(mousePosX / sqsize);
    heroy = Math.floor(mousePosY / sqsize);
    
    drawMapAndHero();
}

function moveUp() {
   heroy--;
   drawMapAndHero();
}

function moveDown() {
     heroy--;
   drawMapAndHero();
}

function moveLeft() {
     herox--;
   drawMapAndHero();
}

function moveRight() {
     herox--;
   drawMapAndHero();
}

document.onkeypress = function(e) {
let key = e.key;
console.log(key);
switch(key) {
case "w": moveUp(); break;
case "s": moveDown(); break;
case "a": moveLeft(); break;
case "sd": moveRight(); break;
}

}











/*context.strokeRect(0, 0, 50, 50);
context.strokeRect(50, 0, 50, 50;
context.strokeRect(100, 0, 50, 50);
context.strokeRect(150, 0, 50, 50);
context.strokeRect(200, 0, 50, 50);
context.strokeRect(250, 0, 50, 50);

context.strokeRect(0, 50, 50, 50);
context.strokeRect(50, 50, 50, 50;
context.strokeRect(100, 50, 50, 50);
context.strokeRect(150, 50, 50, 50);
context.strokeRect(200, 50, 50, 50);
context.strokeRect(250, 50, 50, 50);

context.strokeRect(0, 50, 50, 50);
context.strokeRect(50, 50, 50, 50;
context.strokeRect(100, 50, 50, 50);
context.strokeRect(150, 50, 50, 50);
context.strokeRect(200, 50, 50, 50);
context.strokeRect(250, 50, 50, 50);
//context.fillRect(20, 40, 50, 10);*/
//console.log(context);