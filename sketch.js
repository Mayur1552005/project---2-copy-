var wall , thickness;
var bullet , speed , weight;

function setup() {
  createCanvas(1200,400);


  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);


  car= createSprite(50,200,50,50);
  car. velocityX = speed;


  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor = "blue";
}

function draw() {
  background("black");
  
  if(hascollided(wall,bullet)){

bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
if(deformation > 10){

car.shapeColor = ("red");
}


if(deformation < 10){

  car.shapeColor = ("green");
  }

  

  }




  
  
  drawSprites();
}


function hascollided(a,b){

  bulletRightEdge = a.x + a.width;
  wallLeftEdge = b.x

if (bulletRightEdge >= wallLeftEdge){

return true 

}

return false

}




