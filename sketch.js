var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var heart,heartImg;
var bullet,bulletImg;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  heartImg = loadImage("assets/heart_3.png")
  bulletImg = loadImage("assets/bullet.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg);
   player.scale = 0.3

   player.debug = true



heart = createSprite(displayWidth-505,displayHeight-605,50,50);
heart.addImage(heartImg);
heart.scale = 0.2


   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}
function zomb() {
  if(frameCount % 50 == 0){ 
    var y = Math.round(random(50,height-100))
    zombie = createSprite(displayWidth-150,y,50,50);  
    zombie.addImage(zombieImg);
    zombie.scale = 0.2
    zombie.velocityX = -10
  }
}

function draw() {
  background(0); 

zomb()


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bullet = createSprite(player.x+50,player.y-20,50,50);
  bullet.addImage(bulletImg);
  bullet.scale = 0.02
  bullet.velocityX = 6
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

 


drawSprites();

}
