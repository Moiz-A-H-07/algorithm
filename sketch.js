var fixedobject,movingobject
var ob1,ob2,ob3
function setup() {
  createCanvas(1200,800);
 fixedobject= createSprite(200, 200, 50, 80);
 ob1=createSprite(100,100,50,50);
 ob1.shapeColor="green"
 ob2=createSprite(200,100,50,50);
 ob2.shapeColor="green"
 ob3=createSprite(300,100,50,50);
 ob3.shapeColor="green"
 ob2.velocityX=1;
 ob2.velocityY=1;
 //fixedobject.velocityX=1;
// fixedobject.velocityY=1;
 fixedobject.shapeColor="green";
movingobject= createSprite(400,200,80,30);
movingobject.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingobject.x=World.mouseX;
  movingobject.y=World.mouseY;
 
 if (istouching(movingobject,ob2)) {
    movingobject.shapeColor="red";
ob2.shapeColor="red";
  }else {
    movingobject.shapeColor="green";
    ob2.shapeColor="green";
  }
  
  bounceoff(movingobject,ob2)
 
  
    drawSprites();
}



// to make it only touch on borders.
//movingobject.x-fixedobject.x==fixedobject.width/2+movingobject.width/2 || 
    //fixedobject.x-movingobject.x==fixedobject.width/2+movingobject.width/2