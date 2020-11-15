var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var landingZone1Sprite, landingZone2Sprite,landingZone3Sprite, landingZone1Body, landingZone2Body,landingZone3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.velocityX=3;
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.velocityX=3;
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="green";
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	landingZone1Sprite=Bodies.rectangle(245,430,10,40, {isStatic:true});
	landingZone2Sprite=Bodies.rectangle(300,445,100,10, {isStatic:true});
	landingZone3Sprite=Bodies.rectangle(355,430,10,40, {isStatic:true});

	packageBody = Bodies.circle(0 , 200 , 5 , {restitution:1, isStatic:true});
	packageBody.velocityX=3;
	World.add(world, packageBody);

	landingZone1Body=Bodies.rectangle(245,430,10,40);
	World.add(world, landingZone1Body);
	landingZone2Body=Bodies.rectangle(300,445,100,10);
	World.add(world, landingZone2Body);
	landingZone3Body=Bodies.rectangle(355,430,10,40);
	World.add(world, landingZone3Body);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	background(0);
	
	Engine.update(engine);

	  rectMode(CENTER);
	  rect(landingZone1Body.position.x,landingZone1Body.position.y,10,40);
	  rect(landingZone2Body.position.x,landingZone2Body.position.y,100,10);
	  rect(landingZone3Body.position.x,landingZone3Body.position.y,10,40);

	  packageSprite.position.y=packageBody.position.y;
	  
  	  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic( packageBody, false);
    
  }
}



