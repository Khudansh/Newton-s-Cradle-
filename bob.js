class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0
        }
        
        this.body = Bodies.circle(x,y,20,options);
        this.radius=40;
        World.add(world,this.body);

    }

    display(){
     fill("pink");
     ellipseMode(RADIUS);
     ellipse(this.body.position.x,this.body.position.y,20,20);
    }

    

}