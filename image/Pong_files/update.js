



var keysDown = {};

addEventListener("keydown",function(e){
	keysDown[e.which] = true;

}, false);

addEventListener("keyup",function(e){
	delete keysDown[e.which] ;

}, false);


var update = function(modifier){

// var audio = new Audio("sound/jab.mp3");
var audio = document.getElementById('jab');

if  (13 in keysDown){
	isGameStarted = true;
}


// if(isGameStarted){
// 	//Ball movement
// 	ball.x +=ball.speedX * modifier;
// 	ball.y +=ball.speedY * modifier;
// }


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
 if(ball.x - ball.r<=0){
 	p2.score++;
 	alert("P2 wins!")
 	reset();
 }

//ball collide right
if(
	ball.x >= canvas.width - ball.r){
	p1.score++;
   
    alert("P1 wins!")
	reset();
}

//ball colliding with top boundary
if (ball.y-ball.r <=0){
	ball.vY = Math.abs(ball.vY);
	
}

//ball colliding with bottom boundary

if (ball.y >= (canvas.height - ball.r) ){
	ball.vY = Math.abs(ball.vY) * -1;
	
}


//ball colliding with p1
if((ball.x-ball.r)<=(p1.x+p1.width)
	&& p1.x <=(ball.x + ball.r)
	&& ball.y <= (p1.y + p1.height)
	&& p1.y <= (ball.y + ball.r)
){  
	audio.load();
	audio.play();
	ball.vX = Math.abs(ball.vX);
	ball.vY=randomize();
    
}

//ball colliding with p2
if(ball.x <= (p2.x + p2.width)
   && p2.x <= (ball.x + ball.r )
   && ball.y <=(p2.y + p2.height)
   && p2.y <= (ball.y + ball.r)
  ){  
  	audio.load();
  	  audio.play();
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

	return Math.random()> 0.5 ? _rand : _rand * -1;
}




