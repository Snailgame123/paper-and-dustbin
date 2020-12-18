class Paper{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:false,
            restitution:0.3,
            friction:1.5,
            density:4.5
        }
        this.body= Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height= height
        this.image=loadImage("paper.png")
        World.add(world,this.body)

    }
    display()
{
    var pos= this.body.position
    imageMode(CENTER)
    
    image(this.image,pos.x,pos.y,this.width+10,this.height+10)
}
}
function keyPressed(){
    if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

    }
}