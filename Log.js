class Log{
    constructor(x,y,hieght,angle){
        
        var options = {
            restitution : 0.8,
            friction : 1,
            density : 1
        }

        this.body = Bodies.rectangle(x,y,50,hieght,options);

            this.width = 20;
            this.hieght = hieght;

            Matter.Body.setAngle(this.body,angle);

            World.add(world,this.body);

    }

    display () {

        push();

        translate(this.body.position.x,this.body.position.y);

        angleMode(RADIANS)

        rotate(this.body.angle);

        rectMode(CENTER);

        fill("#9B870C");

     strokeWeight(6);

     stroke("#bB870C");

        rect(0,0,this.width,this.hieght);

        pop();

    }

}
