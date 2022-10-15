class Obstacle{
    //creating obstacles
    constructor(ctx){
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * (900-100)) + 100;
        this.y = 0;
        this.w = 70
        this.h = 70;
        this.img = new Image();
    }
    //function to draw the obstacles
    draw(){
        this.img.src= "/docs/assets/images/rocketslogo.png"
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    top(){
        return this.y;
    }

    bottom(){
        return this.y + this.h
    }

    left(){
        return this.x
    }
    right(){
        return this.x + this.w
   
    }
}