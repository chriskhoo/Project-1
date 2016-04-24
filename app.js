// Draw everything

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 768;
canvas.height = 432;
document.body.appendChild(canvas);


var background = new Image();
background.src = "image/background.gif";

var img2 = new Image();

img2.src = "image/panda.jpg";


var ball = {
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


  ctx.drawImage(background,0,0,768,432);
  ctx.lineWidth= 2;
  ctx.strokeStyle = "#d2e3ed";
  ctx.strokeRect(0,0,canvas.width,canvas.height);


  ctx.fillStyle = "#ffa500";
  // P1
  ctx.fillRect(p1.x, p1.y, p1.width, p1.height);

  // P2
  ctx.fillRect(p2.x, p2.y, p2.width, p2.height);

// ball


var pattern2 = ctx.createPattern(img2,"repeat");

  ctx.beginPath();
  ctx.fillStyle = pattern2;
  ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();



// Text options
  ctx.fillStyle = "white";
  ctx.font = "12px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  //P1 label

  // P1 Score
  // ctx.fillText("P1: "+p1.score, 32, 32);

  // P2 Score
  // ctx.fillText("P2: "+p2.score, canvas.width - 32 - 40, 32);

  // Text options
  ctx.font = "25px Helvetica";



  // Initial text
  if (!isGameStarted) {
    ctx.fillText("P1: Press W and S", 200, canvas.height / 2 - 45);
    ctx.fillText("P2: Press Up and Down arrow", 200, canvas.height / 2 - 20);
    ctx.fillText("Press 'enter' to start", 200, canvas.height / 2+10);
  }


};

 var reset = function () {


  isGameStarted = false;





  ball.x = (canvas.width - ball.r) / 2;
  ball.y = (canvas.height - ball.r) / 2;


  // randomly start from left or right
  ball.vX = Math.random() > 0.5 ? 500 : -500;

  ball.vY = Math.random() > 0.5 ? 500 : -500;



}


var keysDown = {};

addEventListener("keydown",function(e){
  keysDown[e.which] = true;

}, false);

addEventListener("keyup",function(e){
  delete keysDown[e.which] ;

}, false);


var update = function(modifier){



// var audio = new Audio("sound/jab.mp3");
var audio1 = document.getElementById('grunt1');
var audio2 = document.getElementById('grunt2');
var bounce= document.getElementById('bounce');
if  (13 in keysDown){
  isGameStarted = true;
}



 if (87 in keysDown) { // P1 holding up (key: w)
    p1.y -= p1.speed * modifier;
    console.log("p1 w key is working");
 if (p1.y <= 0) {
     p1.y = 0;
    }
  }


 if (83 in keysDown){
  p1.y += p1.speed * modifier;
  console.log("p1 s key is working");
  var boundary = canvas.height- p1.height;
  if(p1.y>= boundary){
    p1.y = boundary;
  }
}

 if (38 in keysDown) { // P1 holding up (key: w)
    p2.y -= p2.speed * modifier;
    console.log("p2 arrow up key is working");
 if (p2.y <= 0) {
     p2.y = 0;
    }
  }

 if (40 in keysDown){
  p2.y += p2.speed * modifier;
  console.log("p2 arrow down key is working");
  var boundary = canvas.height- p2.height;
  if(p2.y>= boundary){
    p2.y = boundary;
  }
}


// ball collide left
 if(ball.x-ball.r<=0){
  p2.score++;
  alert("P2 wins!")

  reset();



    location.reload();
 }

//ball collide right
if(
  ball.x >= canvas.width - ball.r){
  p1.score++;

    alert("P1 wins!")

  reset();


    location.reload();
}

//ball colliding with top boundary
if (ball.y-ball.r <=0){
  ball.vY = Math.abs(ball.vY) ;
  bounce.load();
  bounce.play();

}

//ball colliding with bottom boundary

if (ball.y >= (canvas.height - ball.r) ){
  ball.vY = Math.abs(ball.vY) * -1 ;
  bounce.load();
  bounce.play();

}


//ball colliding with p1
if((ball.x-ball.r)<=(p1.x+p1.width)
  && p1.x <=(ball.x + ball.r)
  && ball.y <= (p1.y + p1.height)
  && p1.y <= (ball.y + ball.r)
){
  audio1.load();
  audio1.play();
  ball.vX = Math.abs(ball.vX);
  ball.vY=randomize();

}

//ball colliding with p2
if(ball.x <= (p2.x + p2.width)
   && p2.x <= (ball.x + ball.r )
   && ball.y <=(p2.y + p2.height)
   && p2.y <= (ball.y + ball.r)
  ){
    audio2.load();
    audio2.play();
  ball.vX = Math.abs(ball.vX)* -1;
     ball.vY=randomize();


   }


if(isGameStarted){
  //Ball movement
  ball.x +=ball.vX * modifier;
  ball.y +=ball.vY * modifier;
}


};



function randomize(){
  var _rand = Math.random()*600;

    if(Math.random()>0.5){
    return _rand
  }
  else{
    return _rand * -1
  }
}




function mainLoop(){

  var now = new Date().getTime();
  dt = now - then;
  update(dt/1000);
  render();
  then=now; //*to loop back latest time
  requestAnimationFrame(mainLoop);



}



// To start the game
var isGameStarted = false;
var then = Date.now();

reset();
mainLoop();
