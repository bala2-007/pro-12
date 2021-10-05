var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIng  = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  if(frameCount%60==0)
  {
    createApples();
  }
}
function createApples()
{
  apple=createSprite(random(30,340),random(40,150),10,15);
  apple.addImage(appleIng);
  apple.scale = 0.05;
  apple.velocityY=9;
  apple.lifetime=150;
}