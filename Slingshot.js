class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }

        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){ 
        
        if(this.sling.bodyA) {  

                var  pointA=this.sling.bodyA.position;
                var pointB = this.pointB;
                strokeWeight(6);
                stroke(64,224,208);
                line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y);
        }
      }
    }