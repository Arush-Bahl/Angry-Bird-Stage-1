class Bird{
    constructor(x,y){
        
        var options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1
        }

        this.body = Bodies.rectangle(x,y,50,50,options);

            this.width = 50;
            this.hieght = 50;

            World.add(world,this.body);

    }

    display () {

        this.body.position.x = mouseX

        
        this.body.position.y = mouseY

        push();

        translate(this.body.position.x,this.body.position.y);

        angleMode(RADIANS)

        rotate(this.body.angle);

        rectMode(CENTER);

        fill("red");

        rect(0,0,this.width,this.hieght);

        pop();

    }

}
