var seaImg,shipImg, ship;
function preload(){
  shipImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);
  sea = createSprite(300,200,600,400);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;
  

  ship = createSprite(50,50,600,400); 
  ship.x = 130;
  ship.y = 200;
  ship.scale = 0.25;
  ship.addAnimation("sailing", shipImg)
}

function draw() {
  background("blue");
 

if (sea.x < 0){
  sea.x = sea.width/8;
}

  drawSprites();
}