class Block {
    constructor(x, y, width, height){
        var options = {
            density : 1.2,
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    b(){
        fill(89, 0, 179); 
    }
    y(){
        fill(255, 255, 0);
    }
    g(){
        fill(64, 255, 0);
    }
    pp(){
        fill(255, 51, 153);
    }
    c(){
        fill(0, 255, 255);
    }
    lp(){
        fill(255, 51, 119);
    }
    o(){
        fill(255, 102, 0);
    }
    bl(){
        fill(255, 193, 128);
    }
    p(){
        fill(255, 102, 255);
    }
    w(){
        fill(255);
    }
    display(){
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}