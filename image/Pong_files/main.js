

function mainLoop(){
	var now = new Date().getTime();
	dt = now - then;
	update(dt/1000);
	render();
	then=now; //*to loop back latest time
	requestAnimationFrame(mainLoop);

}

requestAnimationFrame(mainLoop);

// To start the game
var isGameStarted = false;
var then = Date.now();

reset();
mainLoop();







