class Rope{
	constructor(objtA, objtB, offsetX, offsetY){
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		var options={
            bodyA:objtA,			 
			bodyB:objtB
			//pointB:{x:this.offsetX, y:this.offsetY}
		}
		this.Rope = Constraint.create(options);
		World.add(world, this.Rope);
	}
    display(){
        var pointA = this.Rope.bodyA.position;
		var pointB = this.Rope.bodyB.position;
		
		var anchor1x = pointA.x;
		var anchor1y = pointA.y;

		var anchor2x = pointB.x-this.offsetX;
		var anchor2y = pointB.y-this.offsetY;

		strokeWeight(3);	
		line(anchor1x, anchor1y, anchor2x, anchor2y);	
        //line(pointA.x, pointA.y, pointB.x-this.offsetX, pointB.y-this.offsetY);
    }
}