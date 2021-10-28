var canvas;
var shooter,shooterImg1,shooterImg2,bgImg;
var zombiesGroup, zombie1, zombie2, zombie3;

function preload(){
shooterImg1 = loadImage("Shooter1.png.png");
shooterImg2 = loadImage("Shooter2.png.png");
bgImg = loadImage("Background_Img.jpg");
zombie1 = loadImage("zombie1.png");
zombie2 = loadImage("zombie2.png");
zombie3 = loadImage("zombie3.png");
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    shooter = createSprite(100,340,20,20);
    shooter.addImage("standing",shooterImg1);
    shooter.addImage("shooting",shooterImg2);
    shooter.debug = true;

    zombiesGroup = createGroup();
}

function draw() {

    background(bgImg);
    if(keyDown("space")){
      shooter.changeImage("shooting",shooterImg2);
    }

    spawnZombies();
    drawSprites();
}

function spawnZombies(){
    if (frameCount % 100 === 0){
      var zombie = createSprite(1500,340,10,40);
      zombie.velocityX = -3;
      
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: zombie.addImage(zombie1);
                 break;
         case 2: zombie.addImage(zombie2);
                 break;
         case 3: zombie.addImage(zombie3);
                 break;
         default: break;
       }
         
       zombie.scale = 0.5;
       zombie.lifetime = 1500;
      
       zombiesGroup.add(zombie);
    }
   }