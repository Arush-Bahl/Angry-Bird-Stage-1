const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box = new Box(700,520,70,70);

    box1 = new Box(920,520,70,70);

    box2 = new Box(700,440,70,70);

    box3 = new Box(920,440,70,70);

    box4 = new Box(810,360,70,70);

    ground = new Ground(600,590,1200,20);

        pig = new Pig(810,550);

        pig1 = new Pig(810,420);

        log = new Log(810,460,300,PI/2);

        log1 = new Log(810,380,300,PI/2);

        log2 = new Log(760,320,150,PI/7);

        log3 = new Log(870,320,150,-PI/7);

        bird = new Bird(200,200);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    box.display();

    box1.display();

    box2.display();

    box3.display();

    box4.display();

    ground.display();

    pig.display();

    pig1.display();

    log.display();

    log1.display();

    log2.display();
    
    log3.display();

    bird.display();

}