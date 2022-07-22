let scoreEl = document.getElementById("score");
let highScoreEl = document.getElementById("highScore");
let Playermove = {
    Up: false,
    Down: false,
    Left: false,
    Right: false
}
let player = {
    x: cnv.width/2,
    y:100,
    w:50,
    h:50
}
let playerCollide = {
    Up: true,
    Down: true,
    Left: true,
    Right: true
}
let froob = {
    x: newFroob(cnv.width),
    y:newFroob(cnv.height),
    w:50,
    h:50
}
let scoreval = 0, myVar, numberVar = 0, playerSpace = [],gameover=false,highScore = getHighScore(), firstMove = false;

highScoreEl.innerHTML = highScore;
loop();
function loop(){
    if (!gameover){
      numberVar++
    DrawBack();
    DrawPlayer();
    DrawFroob();
    if  (numberVar === 20){
        MovePlayer();
        numberVar = 0;
    }
    Collide();  
    } else {
        DrawBack();
    DrawPlayer();
    DrawFroob();
        DrawGameOver();
        MouseClick();
    }
    
    requestAnimationFrame(loop);
}
document.addEventListener("keydown",keydownHandler);