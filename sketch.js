var bg, sleep, brush, gym, eat, bath, drink;
var astronaut;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  drink = loadAnimation("drink1.png","drink2.png");
}

function setup() {
  createCanvas(1300,1350);
  astronaut = createSprite(675,730);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.12;
}

function draw() {
  background(bg);  
  drawSprites();

  textSize(200);
  fill("white");
  textSize("Instructions:",20, 30);
  textSize(25);
  text("Up Arrow = Brushing", 20, 30);
  text("Down Arrow = Gymming", 20, 50);
  text("LEFT_ARROW = Eating", 20, 70);
  text("RIGHT_ARROW = Bathing", 20, 90);
  text("d key = Drinking", 20, 125);
  text("d key = Sleeping", 20, 145);


  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("d")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("v")){
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}