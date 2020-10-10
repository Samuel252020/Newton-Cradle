
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var radius, diameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	radius = 50;
	diameter = 2*radius;
	roof= new Roof(width/2, 50, width-100, 50);
	bobObject1 = new Bob((width-4*diameter)/2, height-100, radius);
	bobObject2 = new Bob((width-4*2*radius)/2+1*diameter, height-100, radius);
	bobObject3 = new Bob((width-4*2*radius)/2+2*diameter, height-100, radius);
	bobObject4 = new Bob((width-4*2*radius)/2+3*diameter, height-100, radius);
	bobObject5 = new Bob((width-4*2*radius)/2+4*diameter, height-100, radius);

	rope1 = new Rope(bobObject1.body, roof.body, 2*diameter, 0);
	rope2 = new Rope(bobObject2.body, roof.body, 1*diameter, 0);
    rope3 = new Rope(bobObject3.body, roof.body, 0*diameter, 0);
	rope4 = new Rope(bobObject4.body, roof.body, -1*diameter, 0);
	rope5 = new Rope(bobObject5.body, roof.body, -2*diameter, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-1500,y:0});
	}
}




