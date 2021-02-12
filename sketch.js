//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground, ball;
function setup() {
  createCanvas(800,400);

engine = Engine.create();

world = engine.world;

var ground_options ={
  'isStatic' : true
}
ground = Bodies.rectangle(400,390,800,20,ground_options);
World.add(world, ground);

var ball_options ={

  'restitution': 1
}
ball = Bodies.rectangle(400,200,40,40,ball_options);
World.add(world,ball);



  
}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y,40,40);
}






