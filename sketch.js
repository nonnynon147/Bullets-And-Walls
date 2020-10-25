var car, wall;
var speed,weight,thickness
var bullet,wall;
var damage;

function setup() {
  createCanvas(1600,400);
  createSprite(400,200,50,50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/wallThickness*wallThickness*wallThickness;
  bullet = createSprite(50,200,10,50);
  wall = createSprite(1500,200,thickness,height/2);
  car.velocityX = speed;
  car.collide(wall);
}

function draw() {
  background(0,0,0); 
  bullet.shapeColor(255,255,255) 
  drawSprites();
  if(damage<=3.68){
    bullet.shapeColor(0,255,0);
  }
  if(formula>=12.43){
    bullet.shapeColor(255,0,0);
  }
  bullet.display();
  wall.display();
}
 

