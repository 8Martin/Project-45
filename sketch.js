var form,game;
var b,bImg,intro,introImg;
var gameState = 0;
var plant,plantImg;
var walle,walle1Img,walle2Img;
var wa,waImg,trash,trashImg,trash2Img;
var cube1,cubeImg;

function preload() {
  bImg = loadImage("Disney Pixar.png");
  plantImg = loadImage("plant.png");
  walle1Img = loadAnimation("WALLE_side.png");
  walle2Img = loadAnimation("WALLE_side2.png");
  waImg = loadImage("trash_cube.png");
  trashImg = loadAnimation("b1.gif","b2.gif","b3.gif");
  cubeImg = loadImage("cube_1.png");
  m1 = loadSound("m1.mp3");
}

function setup(){
  canvas = createCanvas(1100,700);
  
  b = createSprite(550,348,20,20);
  b.addImage("b1",bImg);
  b.scale = 1.1;

  plant = createSprite(1280,148,20,20);
  plant.addImage("p1", plantImg);

  trash = createSprite(4050,340,30,30);
  trash.addAnimation("tr1",trashImg);
  trash.scale = 2.5; 
   
  //IN THE SERVE STATE//
  wa = createSprite(4300,580,30,30);
  wa.addAnimation("wa1",waImg);
  wa.scale = 0.6;

  //IN THE PLAY STATE//
  walle = createSprite(100,6000,30,30);
  walle.addAnimation("w1",walle1Img);
  walle.addAnimation("w2",walle2Img);
  walle.scale = 0.6;

  game = new Game()
  game.start();

}

function draw(){
   background("black");
 
 
   //IN THE SERVE STATE//
   if(gameState === 1){
    b.x = 2000;
    wa.x = 430; 
    trash.x = 450;
   }

   if(gameState === 2){
    wa.x = 4300; 
    walle.y = 600;
    trash.x = 4500;
   
    background("lightyellow");
    if(keyDown("LEFT_ARROW")){
      walle.x = walle.x-8;
      walle.changeAnimation("w2");
      m1.play();
      
    
    }
    if(keyDown("RIGHT_ARROW")){
      walle.x = walle.x+8;
      walle.changeAnimation("w1");
      m1.play();
      
   
    }
  }

  
   drawSprites();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


