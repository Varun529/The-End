class Plinko{
    constructor(x,y){
        var options={
            isStatic: true
        }
        
        this.body= Bodies.circle(x,y,10,options);
        //this.width=25;
        //this.height=25;
        this.radius=10;
        World.add(world,this.body);
        
    }
    display(){
       
       var pos =this.body.position; 
       
        //rect(pos.x, pos.y, this.width, this.height);
        
        push();

        translate(pos.x, pos.y);
        
        fill("white");
        circle(0,0,this.radius*2);
        
        
        pop();
        
    }
}