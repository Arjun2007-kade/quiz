var canvas;
var database,bg;
var gameState = 0, contestantCount, quiz, question, person, allPeople;
var backgroundColor = "pink";

function preload(){
  bg=loadImage("2.jpg")
}
function setup(){
  database = firebase.database();
  canvas = createCanvas(900,500);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bg);

}
