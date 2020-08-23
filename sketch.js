var rect1, rect2;
var fixed,moving;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200, 100, 50, 50);
  rect1.shapeColor = "red";
  rect1.debug = true;

  rect2 = createSprite(200, 300, 50, 50);
  rect2.shapeColor = "blue";
  rect2.debug = true;

  fixed = createSprite(400, 100, 50, 50);
  fixed.shapeColor = "green";
  fixed.debug = true;

  moving = createSprite(400, 300, 50, 50);
  moving.shapeColor = "orange";
  moving.debug = true;

  rect1.velocityY = 5;
  rect2.velocityY = -5;
}

function draw() {
  background(0);
  
moving.x = mouseX;
moving.y = mouseY;

if(Touching(moving,fixed) === true){
  fixed.shapeColor = "yellow";
  moving.shapeColor = "purple";
}
else{
  fixed.shapeColor = "orange";
  moving.shapeColor = "green";
}

Bounce(rect1,rect2);

  drawSprites();
}
