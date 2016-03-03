// Draw everything

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 768;
canvas.height = 432;
document.body.appendChild(canvas);

// var i=0.2;

// function interval(){
//   i = i+ 0.2;
// }
// var angle=setInterval(interval(), 1000);

var img = new Image();

img.src = "image/panda.jpg";

var img2 = new Image();
img2.src = "image/bamboo.jpg";

var ball = {
// x:100,
// y:75,
// // r: 5 + 15 * Math.abs(Math.cos(angle)),
r:20
}


var p1 = {
  width: 10,
  height: 150,
  x: 20,
  y: (canvas.height - 150) / 2,
  score: 0,
  speed: 1000
}


var p2 = {
  width: 10,
  height: 150,
  x: canvas.width - 10 - 20,
  y: (canvas.height - 0 - 150) / 2,
  score: 0,
  speed: 1000
}





var render = function () {

  // clear the canvas

  ctx.clearRect(0, 0, canvas.width, canvas.height);



 

  ctx.fillStyle = "#ff9933";
  // P1
  ctx.fillRect(p1.x, p1.y, p1.width, p1.height);

  // P2
  ctx.fillRect(p2.x, p2.y, p2.width, p2.height);

//   // ball
// function drawCircle (){




var pattern = ctx.createPattern(img,"repeat");

ctx.beginPath();
ctx.fillStyle = pattern;
ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

     
// // requestAnimationFrame(drawCircle);

// }

// drawCircle();

// Text options
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  //P1 label

  // P1 Score
  ctx.fillText("P1: "+p1.score, 32, 32);

  // P2 Score
  ctx.fillText("P2: "+p2.score, canvas.width - 32 - 40, 32);

  // Text options
  ctx.font = "25px Helvetica";

  // Initial text
  if (!isGameStarted) {
    ctx.fillText("P1: Press W and S", 200, canvas.height / 2 - 45);
    ctx.fillText("P2: Press Up and Down arrow", 200, canvas.height / 2 - 20);
    ctx.fillText("Press enter to start", 200, canvas.height / 2+10);
  }

// if (isGameEnded) {
//     ctx.fillText("Press enter to start", 200, canvas.height / 2);
//   }

};

