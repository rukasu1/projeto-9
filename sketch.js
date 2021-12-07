var caixa;

function setup() {
  createCanvas(400,400);
  caixa = createSprite (200,200,30,30);
}

function draw() 
{
  background("red");
  if (keyIsDown (RIGHT_ARROW)){
    background("yellow");
    caixa.position.x = caixa.position.x+5;
    
  }
  if (keyIsDown (LEFT_ARROW)){
    background("green");
    caixa.position.x = caixa.position.x-5;

  }
  
  if (keyIsDown (UP_ARROW)){
    background("blue");
    caixa.position.y = caixa.position.y-5;

  }
  if (keyIsDown (DOWN_ARROW)){
    background("purple");
    caixa.position.y = caixa.position.y+5;

  }





  drawSprites ();
}




