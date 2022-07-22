function DrawBack() {
    Fill("green");
    Rect(0, 0, cnv.width, cnv.height, "fill");
    Fill("grey");
    //drawRects();
}
function DrawPlayer() {
    Fill("crimson");
    Rect(player.x, player.y, player.w, player.h, "fill");
    for (i=0;i<playerSpace.length;i++){
        Rect(playerSpace[i].x,playerSpace[i].y,playerSpace[i].w,playerSpace[i].h,"fill");
    }
}
function Collide() {
    collideBase();
    froobCollide();
    moveCollide();
}
function collideBase() {
    if (player.y === -50) {
        gameover = true;
    }
        if (player.y + player.h === cnv.height+50) {
        gameover = true;
    }
    if (player.x === -50) {
        gameover = true;
    }
    if (player.x + player.w === cnv.width+50) {
        gameover = true;
    }
}
function MovePlayer() {
    playerSpace.push({x:player.x,y:player.y,w:player.w,h:player.h});
    if (playerSpace.length===4+scoreval){
        playerSpace.shift();    
    }
    if (Playermove.Up) {
        player.y += -50;
    } if (Playermove.Down) {
        player.y += 50;
    } if (Playermove.Left) {
        player.x += -50;
    } if (Playermove.Right) {
        player.x += 50;
    }
    if (firstMove){
      for (i=0;i<playerSpace.length;i++){
        if (player.x === playerSpace[i].x && player.y === playerSpace[i].y){
            gameover = true;
            break;
        }
    }  
    }
}
function keydownHandler(event) {
    if (event.code === "KeyW" && playerCollide.Up) {
        MoveFalse()
        Playermove.Up = true;
        firstMove = true;
    } if (event.code === "KeyS"  && playerCollide.Down) {
        MoveFalse()
        Playermove.Down = true;
        firstMove = true;
    } if (event.code === "KeyD"  && playerCollide.Right) {
        MoveFalse()
        Playermove.Right = true;
        firstMove = true;
    } if (event.code === "KeyA"  && playerCollide.Left) {
        MoveFalse()
        Playermove.Left = true;
        firstMove = true;
    }
}
function MoveFalse(){
    Playermove.Up = false;
    Playermove.Down = false;
    Playermove.Right = false;
    Playermove.Left = false;
}
function DrawFroob(){
    Fill("orange");
    Rect(froob.x,froob.y,froob.w,froob.h,"fill");
}
function froobCollide(){
    if (player.x === froob.x && player.y === froob.y){
        scoreval++
        scoreEl.innerHTML = scoreval;
        if (scoreval > highScore){
            highScore = scoreval;
            localStorage.setItem("HighScore",JSON.stringify(highScore));
            highScoreEl.innerHTML = highScore;
        }
        froob.x = newFroob(cnv.width);
        froob.y = newFroob(cnv.height);
    }
    for (i=0;i<playerSpace.length;i++){
         if (froob.x === playerSpace[i].x && froob.y === playerSpace[i].y||
             froob.x === player.x && froob.y === player.y){
            froob.x = newFroob(cnv.width);
            froob.y = newFroob(cnv.height);
         }   
        }
}
function newFroob(val){
    return Math.floor(Math.random()*(val/50))*50;
}
function DrawGameOver(){
    Fill("rgb(0,0,0,0.5)");
    Rect(0,0,cnv.width,cnv.height,"fill");
    Fill("white");
    Font("42px Arial")
    text("Game Over",cnv.width/2-100,cnv.height/2,"fill");
    Rect(cnv.width/2-90,cnv.height/2+50,200,100,"fill");
    Fill("black");
    text("Try Again?",cnv.width/2-90,cnv.height/2+110,"fill");
}
function getHighScore(){
    let scoreStr = localStorage.getItem("HighScore");
    return JSON.parse(scoreStr) ?? 0;
}
function MouseClick(){
    if (mouseX>=cnv.width/2-90 && mouseX <=cnv.width/2+110 &&
     mouseY>=cnv.height/2+50 && mouseY <=cnv.height/2+150){
        document.body.style.cursor = "pointer";
        if (mouseIsPressed){
            document.body.style.cursor = "default";
            MoveFalse();
            firstMove = false;
            playerSpace = [];
            player.x = cnv.width/2;
            player.y = 100;
            scoreval = 0;
            gameover = false;
        }
     } else {
        document.body.style.cursor = "default";
     }
}
function moveCollide(){
    playerCollide.Up = true;
    playerCollide.Down = true;
    playerCollide.Left = true;
    playerCollide.Right = true;
      for (i=0;i<playerSpace.length;i++){
      if (playerSpace[i].x === player.x && playerSpace[i].y-50 === player.y){
        playerCollide.Down = false;
        break;
    }  if (playerSpace[i].x === player.x && playerSpace[i].y+50 === player.y){
        playerCollide.Up = false;
        break;
    }  if (playerSpace[i].x-50 === player.x && playerSpace[i].y === player.y){
        playerCollide.Right = false;
        break;
    }  if (playerSpace[i].x+50 === player.x && playerSpace[i].y === player.y){
        playerCollide.Left = false;
        break;
    }  
    }  
    
    
}