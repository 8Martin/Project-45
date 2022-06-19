class Line{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("lightyellow");
        rect(pos.x, pos.y, this.width, this.height);
      }
      /*PHYICS ENGINE
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var cube,line;
var engine, world;
PHYCIS ENGINE*/
 /*PHYCIS ENGINE
  engine = Engine.create();
  world = engine.world;
PHYCIS ENGINE*/
//PHYCIS ENGINE//
// cube = new Box(200,680,40,40,5);
// line = new Line(690,699,1900,20);
 //PHYCIS ENGINE//
  // Engine.update(engine);
 
//          //
}