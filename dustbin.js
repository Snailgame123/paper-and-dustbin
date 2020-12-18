class Dustbin{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true,
            restitution:1

        }
        this.body= Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height= height
        this.image=loadImage("dustbin.png")
        World.add(world,this.body)

    }
    display()
{
var pos= this.body.position
var angle= this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
fill("white")
noStroke()
rect(0,0,this.width,this.height)
pop()
}
}