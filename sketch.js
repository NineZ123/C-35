var database;
var game, form, player;
var gameState=0;
var playerCount=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}
 
function draw(){


 }