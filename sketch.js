const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles =[];
var plinkos =[];
var divisions = [];
var divisionsheight =300;

var ground ;
function setup() {
 var canvas = createCanvas(800,800);
 engine = Engine.create();
 world= engine.world;
  
ground = new Ground(width/2, height, width, 20);

for (var k = 0; k<= width; k+= 80){
divisions.push(new Division (k, height-divisionsheight/2, 10, divisionsheight));
}

for (var j = 75; j<= width; j+= 50){

  plinkos.push(new Plinko(j, 75 ));
}
for (var j = 100; j<= width; j+= 50){

  plinkos.push(new Plinko(j, 175 ));
}
for (var j = 75; j<= width; j+= 50){

  plinkos.push(new Plinko(j, 275 ));
}
for (var j = 100; j<= width; j+= 50){

  plinkos.push(new Plinko(j, 375 ));
}


}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  drawSprites();
}