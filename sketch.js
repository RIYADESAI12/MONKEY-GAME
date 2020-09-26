var PLAY;
var END;
var gamestate = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
 
 
  
foodGroup = new Group();
obstacleGroup = new Group();  
}


function draw() {
  background("white")
  text("Survival Time:" + survivalTime ,200,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/50)
 
  if(gamestate === PLAY){
    
    
  
  if(keyDown("space") && monkey.y >= 300){
  monkey.velocityY = -12;
   
 }
 
  monkey.velocityY = monkey.velocityY+0.8;
  
 if(ground.x < 0){
   ground.x = ground.width/2
 
 }
  
}
  
if(gamestate === END){
  if(monkey.isTouching(obstacleGroup)){
   ground.velocityY =0;
   monkey.velocityY =0;
   foodGroup.velocityY =0;
   obstacleGroup.velocityY = 0;
   obstacleGroup.destroyEach();
   foodGroup.destroyEach();
   survivalTime = 0;
   
    
  }
  
}
 
  
  
  
  monkey.collide(ground);
  
  food();
  obstacle();
  drawSprites();

}

function food(){
  
if(World.frameCount % 80 === 0){
  var banana = createSprite(400,200,20,20)
  banana.addImage(bananaImage)
  banana.scale = 0.1;
  banana.y = Math.round(random(200,180));
  banana.velocityX = -7;
  banana.setLifetime = 300;
  
  foodGroup.add(banana);
}

}

function obstacle(){
if(World.frameCount % 80 === 0){    
  var obstacle = createSprite(400,200,20,20)
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.y = Math.round(random(320,320));
  obstacle.velocityX = -7;
  obstacle.setLifetime = 300;
  
  obstacleGroup.add(obstacle);


}
}


