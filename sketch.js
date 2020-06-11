var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;

var drawing = [];
var dbDrawing = [];


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function mouseDragged(){
    var point = {x: mouseX, y: mouseY}
    drawing.push(point);
    var drawingRef = database.ref('drawing');
    drawingRef.set({"d": drawing});
}


function draw(){

  if(playerCount === 1){
    game.update(1);
    //form.display();
  }

  if(gameState === 1){
    clear();
    //game.play();
    //form.hide();
    readData();
    beginShape();
    stroke("red");
    strokeWeight(4);
    noFill();
  
    for(var i = 0; i < dbDrawing.length; i++){
      vertex(dbDrawing[i].x, dbDrawing[i].y);
      endShape();
    }
  }
  }

  function readData(){
    database.ref('drawing/').on("value",(data)=>{
        dbDrawing = data.val().d
    })
  } 
 




