var bfly;
var lives=7;
var gamestate ="serve"
var start,finish,invisibleBrick1,invisibleBrick2,rightEdgedWall,leftEdgedWall;
var topEdgedWall,bottomEdgedWall,middleWall,bfly,brick2,spider,brick1;
function preload(){
  bricksimage=loadImage("bricks.png")
bfly1=loadImage("butturfly.png")
st=loadImage("start.png")
fn=loadImage("finish.png")
Vwall=loadImage("Vwall.png")
Hwall=loadImage("Hwall.png")
sp=loadImage("spider.png")
brs=loadImage("brownSnake.png")
bs=loadImage("blueSnake.png")
fire=loadImage("fire.png")
mn=loadImage("mn.png")
fl=loadImage("flower.png")
go=loadImage("go2.png")
yw=loadImage("yw.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
 start=createSprite(windowWidth/windowWidth+50,windowHeight-30,25,15);
start.addImage(st)
start.scale=0.5;


 finish=createSprite(windowWidth-50,windowHeight/windowHeight+30,25,15);
finish.addImage(fn)
finish.scale=0.5;

 invisibleBrick1=createSprite(windowWidth/3.3,windowHeight/4.2,290,10);
invisibleBrick1.shapeColor="green";
invisibleBrick2=createSprite(windowWidth/3.3,windowHeight/1.3,290,10);
invisibleBrick2.shapeColor="green";

invisibleLine1=createSprite(windowWidth/2.5,windowHeight-90,10,140)
invisibleLine1.width=10
invisibleLine1.height=140
invisibleLine1.shapeColor="green"

invisibleLine2=createSprite(windowWidth/1.7,windowHeight/windowHeight+90,10,140)
invisibleLine2.width=10
invisibleLine2.height=140
invisibleLine2.shapeColor="green"

il1=createSprite(windowWidth/1.13,windowHeight/4-60,300,10)
il1.width=300
il1.height=10
il1.shapeColor="green"

il2=createSprite(windowWidth/1.28,windowHeight-60,10,300)
il2.width=10
il2.height=300
il2.shapeColor="green"

 rightEdgedWall = createSprite(windowWidth-10, windowHeight/2+120, 20, windowHeight);
 rightEdgedWall.shapeColor="brown"
rightEdgedWall.width=20;
rightEdgedWall.height=windowHeight;

 leftEdgedWall = createSprite(windowWidth/windowWidth+10, windowHeight/2-120, 20, windowHeight);
 leftEdgedWall.shapeColor="brown"
leftEdgedWall.width=20;
leftEdgedWall.height=windowHeight;

 topEdgedWall = createSprite(windowWidth/2, windowHeight/windowHeight+10, windowWidth, 20);
 topEdgedWall.shapeColor="brown"
topEdgedWall.width=windowWidth;
topEdgedWall.height=20;

bottomEdgedWall = createSprite(windowWidth/2, windowHeight-10, windowWidth, 20);
bottomEdgedWall.shapeColor="brown"
bottomEdgedWall.width=windowWidth;
bottomEdgedWall.height=20;

middleWall1=createSprite(windowWidth/5, windowHeight/2+120, 20, windowHeight-70);
middleWall1.shapeColor="brown"
middleWall1.width=20;
middleWall1.height=windowHeight-70;

middleWall2=createSprite(windowWidth/2.5,windowHeight/2-120,20,windowHeight-70)
middleWall2.shapeColor="brown"
middleWall2.width=20
middleWall2.height=windowHeight-70

middleWall3=createSprite(windowWidth/1.7,windowHeight/2+120,20,windowHeight-70)
middleWall3.shapeColor="brown"
middleWall3.width=20;
middleWall3.height=windowHeight-70

middleWall4=createSprite(windowWidth/1.28,windowHeight/2-120,20,windowHeight-70)
middleWall4.shapeColor="brown"
middleWall4.width=20
middleWall4.height=windowHeight-70

bfly = createSprite(windowWidth/windowWidth+50, windowHeight-70, 20, 20);
bfly.addImage(bfly1)

bfly.scale=0.2;

 brick1=createSprite(windowWidth/9,250,100,20);
brick1.addImage(bricksimage)
brick1.velocityX =3.2;

brick2=createSprite(windowWidth/7,400,100,20);
brick2.addImage(bricksimage)
brick2.velocityX =-3.2;

 spider=createSprite(windowWidth/3.3,windowHeight/3,50,50);
 spider.addImage(sp)
 spider.scale=0.2
spider.velocityY=4;
spider.velocityX=4;

snake1=createSprite(windowWidth/2,windowHeight/2,20,100)
snake1.addImage(brs)
snake1.scale=0.3
snake1.width=20
snake1.height=100
snake1.velocityX=-4
snake1.velocityY=4

snake2=createSprite(windowWidth/2,windowHeight/3,20,100)
snake2.addImage(bs)
snake2.scale=0.3
snake2.width=20
snake2.height=100
snake2.velocityX=4
snake2.velocityY=-4

mw1=createSprite(windowWidth/1.5499,windowHeight/3.7,140,20)
mw1.addImage(fire)
mw1.scale=0.5
mw1.velocityY=-7

mw2=createSprite(windowWidth/1.38,windowHeight/1.5,140,20)
mw2.addImage(fire)
mw2.scale=0.5
mw2.velocityY=7

flower=createSprite(windowWidth-50,windowHeight/windowHeight+80,20,60)
flower.addImage(fl)
flower.scale=0.2

p=createSprite(windowWidth/1.1,windowHeight/2,40,100)
p.addImage(mn)
p.scale=0.6
p.velocityX=-4
p.velocityY=4
}
function draw() {
    background("green");
    drawSprites();
  bfly.velocityX=0;
  bfly.velocityY=0;
  fill("black")
  text("Lives : " + lives,50,50);
//createEdgeSprites()
  brick1.bounceOff(middleWall1);
  brick1.bounceOff(leftEdgedWall);
  
  brick2.bounceOff(middleWall1);
  brick2.bounceOff(leftEdgedWall);
  
  spider.bounceOff(invisibleBrick1);
  spider.bounceOff(invisibleBrick2);
  spider.bounceOff(middleWall2);
  spider.bounceOff(middleWall1);
  
 //bfly.bounceOff(rightEdgedWall);
 //bfly.bounceOff(leftEdgedWall);
 //bfly.bounceOff(bottomEdgedWall);
 //bfly.bounceOff(topEdgedWall);
 //bfly.bounceOff(middleWall1);

  snake1.bounceOff(middleWall2)
  snake1.bounceOff(middleWall3)
  snake1.bounceOff(invisibleLine1)
  snake1.bounceOff(invisibleLine2)
  snake1.bounceOff(topEdgedWall)
  snake1.bounceOff(bottomEdgedWall)

  snake2.bounceOff(middleWall2)
  snake2.bounceOff(middleWall3)
  snake2.bounceOff(invisibleLine1)
  snake2.bounceOff(invisibleLine2)
  snake2.bounceOff(topEdgedWall)
  snake2.bounceOff(bottomEdgedWall)

  mw1.bounceOff(topEdgedWall)
  mw1.bounceOff(bottomEdgedWall)

  mw2.bounceOff(topEdgedWall)
  mw2.bounceOff(bottomEdgedWall)

  p.bounceOff(middleWall4)
  p.bounceOff(rightEdgedWall)
  p.bounceOff(il1)
  p.bounceOff(il2)
  p.bounceOff(bottomEdgedWall)

  if(keyDown(UP_ARROW)){
    bfly.velocityX=0;
    bfly.velocityY=-3;
  }
  if(keyDown(DOWN_ARROW)){
    bfly.velocityX=0;
    bfly.velocityY=3;
  }
  if(keyDown(LEFT_ARROW)){
    bfly.velocityX=-3;
    bfly.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    bfly.velocityX=3;
    bfly.velocityY=0;
  }
  if(bfly.isTouching(brick2)){
    lives=lives-1;
    lifeover();
  }
 
  if(bfly.isTouching(brick1)){
    lives=lives-1;
   lifeover()
  }
  if(bfly.isTouching(spider)){
    lives=lives-1;
    lifeover()
  }
  if(bfly.isTouching(snake1)){
    lives=lives-1;
    lifeover()

  }
  if(bfly.isTouching(snake2)){
    lives=lives-1;
    lifeover()

  }

  if(bfly.isTouching(mw1)){
    lives=lives-1;
    lifeover()

  }
  if(bfly.isTouching(mw2)){
    lives=lives-1;
    lifeover()

  }
  //if(bfly.isTouching(p)){
    //lives=lives-1;
    //lifeover()

  //}
  if(bfly.isTouching(flower)){
     youwin=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
        youwin.addImage(yw)
        youwin.width=windowWidth
      youwin.height=windowHeight
       // text("YOU WIN !!" , windowWidth/2 , windowHeight/2)
        bfly.destroy();
        brick1.destroy();
        brick2.destroy();
        spider.destroy();
        start.destroy();
        finish.destroy();
        snake1.destroy();
        snake2.destroy();
        mw1.destroy();
        mw2.destroy();
        p.destroy();
        flower.destroy();
        rightEdgedWall.destroy();
        leftEdgedWall.destroy();
        topEdgedWall.destroy();
        bottomEdgedWall.destroy();
        middleWall1.destroy();
        middleWall2.destroy();
        middleWall3.destroy();
        middleWall4.destroy();
       }
}

function lifeover(){
  if(lives>=1) {
     bfly.x=windowWidth/windowWidth+50
  bfly.y=windowHeight-70
     
  }
  else {
    
gameover = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
   gameover.addImage(go)
    gameover.width=windowWidth
    gameover.height=windowHeight
   bfly.destroy();
   brick1.destroy();
   brick2.destroy();
   spider.destroy();
   start.destroy();
   finish.destroy();
   snake1.destroy();
   snake2.destroy();
   mw1.destroy();
   mw2.destroy();
   p.destroy();
   flower.destroy();
   rightEdgedWall.destroy();
   leftEdgedWall.destroy();
   topEdgedWall.destroy();
   bottomEdgedWall.destroy();
   middleWall1.destroy();
   middleWall2.destroy();
   middleWall3.destroy();
   middleWall4.destroy();
  }

}