var background;
var cat,catRunningImage,catSittingImage,catStandingImage;
var mouse,mouseSittingImage,mouseRunningImage,mouseStandingImage;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catRunningImage=loadAnimation("images/cat2.png","images/cat3.png");
    catSittingImage=loadAnimation("images/cat1.png");
    catStandingImage=loadAnimation("images/cat4.png");

    mouseSittingImage=loadAnimation("images/mouse1.png");
    mouseRunningImage=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseStandingImage=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600);
    cat.addAnimation("sitting",catSittingImage);
    cat.scale=0.2;

    mouse=createSprite(150,600);
    mouse.addAnimation("sitting",mouseSittingImage);
    mouse.scale=0.2;
}

function draw() {
    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2 ){
        cat.velocityX=0;
        cat.x=300;
        cat.addAnimation("catStanding",catStandingImage);
        cat.changeAnimation("catStanding");
        mouse.addAnimation("mouseStanding",mouseStandingImage);
        mouse.changeAnimation("mouseStanding");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catRunningImage)
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseRunning",mouseRunningImage);
    mouse.changeAnimation("mouseRunning");
  }


}
