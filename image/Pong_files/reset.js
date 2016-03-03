// Reset the game
var reset = function () {

  isGameStarted = false;

  // isGameEnded = true;


  ball.x = (canvas.width - ball.r) / 2;
  ball.y = (canvas.height - ball.r) / 2;

  // p1.x ;
  // p1.y =(canvas.height - 150) / 2;

  // p2.x = canvas.width - 10 - 20;
  // p2.y = (canvas.height - 150) / 2;



  // randomly start from left or right
  ball.vX = Math.random() > 0.5 ? 500 : -500;
  ball.vY = 0;
}
