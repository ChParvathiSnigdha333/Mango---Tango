class Mango{
    constructor(x,y,r){
        var opt = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x = x ;
        this.y = y ;
        this.r = r ;
        this.image = loadImage ("mango.png")
        this.body = Bodies.circle(this.x,this.y,this.r/2,opt) ;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position ;
        push();
        translate(pos.x,pos.y)
        fill("yellow")
        ellipseMode(RADIUS)
        image(this.image,0,0,this.r*2,this.r*2)
        pop();
    }
}