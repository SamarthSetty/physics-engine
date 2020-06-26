const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
 engine= Engine.create();
 world=engine.world;
 var options = {
 isStatic: true 
 }
 var balloptions = {
   restitution:1
 } 
 ground=Bodies.rectangle(200,380,400,50,options);
 World.add(world,ground);
 
  console.log(ground);
  ball=Bodies.circle(200,100,30,balloptions);
  World.add(world,ball);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);  
rect(ground.position.x,ground.position.y,400,50,);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30);
}