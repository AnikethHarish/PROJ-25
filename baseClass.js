class BaseClass{
    constructor(x, y,radius, angle) {
        var options = {
            isStatic:false,
            friction:0,
            density:0.2,
            restitution:0.3
            
            
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
      }
}