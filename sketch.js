
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,side1,side2,side3;
var ground1;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   paper=new Paper(200,450,70);
   ground1=new ground(800,650,1600,30)
  side1=new Bin(1000,510);
 
 

  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
 
 
  
  side1.display();
  paper.display(); 
  ground1.display();

  drawSprites();
}

function keyPressed(){
  
  if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  }	
 
}


