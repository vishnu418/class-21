function setup() {
  createCanvas(800,400);
  
  MRect=createSprite(500,200,70,50);
  MRect.shapeColor="red";
  MRect.velocityX=2;
  MRect.velocityY=2;
  FRect=createSprite(300,300,80,50);
  FRect.velocityX=-2;
  FRect.velocityY=-2;
  FRect.shapeColor="red";
gameobject=createSprite(200,150,70,70);
gameobject.velocityX=2;
gameobject.Y=2;
}

function draw() {
  background(255,255,255);
  MRect.x=World.mouseX;
  MRect.y=World.mouseY ; 
  bounceoff(gameobject,MRect);
  drawSprites();
}

