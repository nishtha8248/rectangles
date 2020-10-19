function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 50, 50);
fixedrectangle.shapeColor=("green");
movingrectangle=createSprite(400,300,50,50);
movingrectangle.shapeColor=("green");
}

function draw() {
  background("pink");  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;

  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&movingrectangle.y-fixedrectangle.y<fixedrectangle.width/2+movingrectangle.width/2&&fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2){

    movingrectangle.shapeColor=("red");
    fixedrectangle.shapeColor=("red");
  }
  else {
    movingrectangle.shapeColor=("green")
    fixedrectangle.shapeColor=("green")
  }



  drawSprites();
}

