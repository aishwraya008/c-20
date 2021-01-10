var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
 movingrect =  createSprite(400, 200, 50, 50);
fixedrect = createSprite(200,200,50,100)

}

function draw() {
  background("lightblue");  
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(fixedrect.x - movingrect.x <= fixedrect.width /2 + movingrect.width/2 &&
    movingrect.x - fixedrect.x <= fixedrect.width /2 + movingrect.width/2 &&
    fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2 &&
    movingrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2){
      movingrect.shapeColor = "red"
      fixedrect.shapeColor = "red"
    }
    else {
      movingrect.shapeColor = "green"
      fixedrect.shapeColor = "green"
    }
  drawSprites();
}