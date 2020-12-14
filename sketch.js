var database;
var game,form,player;
var allPlayers;
var gameState=0;
var playerCount;
var car1,car2,car3,car4,cars;

function setup(){
  createCanvas(500,500);
  database=firebase.database();

  game= new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount===4){
    game.update(1);
  }
}