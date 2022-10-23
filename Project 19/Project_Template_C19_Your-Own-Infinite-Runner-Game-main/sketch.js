var rocket,rock,rock2;
var rocketImg,rockImg,rockImg2;


function preload(){
 
  rocketImg = loadImage("rocket.jpg");
  rockImg = loadImage("rock.jpg");
  rock2Img = loadImage("rock2.jpg");
}


function setup(){
  
  createCanvas(400,400);


rocket = createSprite(160,340,20,20);
rocket.scale =0.6;
rocket.addImage(rocketImg);


}

function draw() {
  background("white");
  

  rocket.x = World.mouseX;
  
  edges= createEdgeSprites();
  rocket.collide(edges);
  
   drawSprites();
   
  


 var select_sprites = Math.round(random(1,3));

  
   if (frameCount % 50 == 0) {
    if (select_sprites == 1) {
       createrock();
     }else if (select_sprites == 2) {
       createrock2();
    }
   }

  
  

}

function createrock2() {
  rock2 = createSprite(random(50, 350),40, 10, 10);
  rock2.addImage(rock2Img);
  rock2.scale=0.5;
  rock2.velocityY = 3;
rock2.lifetime = 150;
  
}


function createrock() {
rock = createSprite(random(50, 350),40, 10, 10);
rock.addImage(rockImg);
rock.scale=0.5;
  rock.velocityY = 3;
  rock.lifetime = 150;
}
