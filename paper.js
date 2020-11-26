class Paper{
    constructor(x, y, radius){
        var options ={
            restitution:0.3,
            friction: 0.5,
            density:5.0
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;     
        this.image = loadImage("paper.png")  
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill(255,0,255);
        image(this.image,pos.x, pos.y, this.radius,this.radius);
    }
}
