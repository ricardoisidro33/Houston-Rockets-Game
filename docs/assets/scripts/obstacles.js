class ObstacleRockets{
    //creating obstacles
    constructor(ctx){
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * (990-50)) + 50;
        this.y = 0;
        this.w = 100
        this.h = 80;
        this.img = new Image();
    }
    //function to draw the obstacles
    draw(){
        this.img.src= "docs/assets/images/rocketslogo.png"
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