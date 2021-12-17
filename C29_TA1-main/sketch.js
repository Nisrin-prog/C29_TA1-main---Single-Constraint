const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(250,690,500,20)
  fruit = Bodies.circle(300,400,15)
  World.add(world,fruit)
  rect1 = Bodies.rectangle(400,200,70,30)
  World.add(world,rect1)
  var options = {
    bodyA : rect1,
    bodyB: fruit,
    length : 50,
    stiffness: 0.7
  }
  rope = Constraint.create(options)
  World.add(world,rope)
  

}

function draw() 
{
  background(51);
  Engine.update(engine);
 fruit.position.x = mouseX
  fruit.position.y = mouseY
  push () 
  fill("yellow")
  ellipse(fruit.position.x,fruit.position.y,15,15)
  pop ()
  rect(rect1.position.x,rect1.position.y,70,30)
  line (rope.bodyA.position.x,rope.bodyA.position.y,rope.bodyB.position.x,rope.bodyB.position.y)
  ground.display()
}




