let canvas = document.getElementById("gameCanvas");
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;


let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;
//geroy 1
let context = canvas.getContext("2d");
let herox = 1;
let heroy = 2;
//geroy 2
let context1 = canvas.getContext("2d");
let heroa = 1;
let herob = 2;

let img = new Image();
img.src = "morski shag krug.png"
context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
//context.fillRect(herox * sqsize, heroy * sqsize, sqsize, sqsize);


let img1 = new Image();
img1.src = "tic tac toe - X.jpg"
context.drawImage(img1, heroa * sqsize, herob * sqsize, sqsize, sqsize);



function drawMap(){
	//risuwane na mrejata
	for(let i = 0; i < canvasWidth; i++) {
		for(let j = 0; j < canvasHeight; j++) {
			context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
		}
	}
}

function drawMarAndHero_O() {
	drawMap();
	//risuwane na geroq O
	context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
}

function drawMarAndHero_X() {
	drawMap();
	//risuwane na geroq X
	context.drawImage(img1, heroa * sqsize, herob * sqsize, sqsize, sqsize);
}
drawMap();



canvas.onclick = function(e) {
//koordinati na mishkata v pikseli
    let mousePosX = e.x - e.originalTarget.offsetLeft;
    let mousePosY = e.y - e.originalTarget.offsetTop;
	
	//risuwa O - ctrl + left mousePosX
	
	if(e.ctrlKey) {
   
    //koordinati na mishkata v kwadratchetata na kartata
    herox = Math.floor(mousePosX / sqsize);
    heroy = Math.floor(mousePosY / sqsize);
   
   drawMarAndHero_O();
}
else{
	//left mouse - risuwa X
	
	//koordinati na mishkata v kwadratchetata na kartata
    heroa = Math.floor(mousePosX / sqsize);
    herob = Math.floor(mousePosY / sqsize);
	drawMarAndHero_X();
}
}