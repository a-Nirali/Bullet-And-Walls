var wall, thickness;
var bullet, speed, weight;
var state;

function setup(){
  createCanvas(1600,400);
 speed = random(55,90);
 thickness = random(232,321);
 weight = random(30,52);
 bullet = createSprite(50,200,50,30);
 wall=createSprite(1200,200,thickness,height/2);
}

function draw(){
  background(0,0,0);
  bullet.velocityX = speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

    if(state==="pre") {
      textSize(20);
      fill("white");
  
      text("Press SPACE BAR.",600,50);
  
      if(keyDown("space")) {
        state="running";
      }
      textSize(20);
      text("Speed: "+speed+"km/h",200,50);
      text("Weight: "+weight+"kg",400,50);
      text("Damage: "+deformation,600,50);
  
      textSize(25);
      text("Rating: "+rating,800,50);
  
      text("Press 'R' to reset",1050,50);
      if(keyDown("r")) {
        reset();

        drawSprites();
      }
    }
    }
 }
  





