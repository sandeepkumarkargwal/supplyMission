class box {
    constructor(x,y,width,height,color){
        var options = {
      isStatic: true
        }
        
        this.body = bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;

        World.add(world,this.body);

    }





    display(){
    rectMode = (CENTER);
    fill = (this.color);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    

}
}