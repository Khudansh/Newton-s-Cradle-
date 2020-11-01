class Rope{
    constructor(bodyA,pointB){
      var options={
          bodyA:bodyA,
          pointB:pointB,
          lenght:1,
          stiffness:0.07
      }
      this.rope = Matter.Constraint.create(options);
      this.pointB=pointB;
      World.add(world,this.rope);
    }

    display(){
          var pointA = this.rope.bodyA.position;
          var pointB = this.pointB
          strokeWeight(2);
          stroke("white");
          line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}