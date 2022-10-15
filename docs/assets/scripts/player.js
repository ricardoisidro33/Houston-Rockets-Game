class Player{
    constructor(x ,y ,w ,h, ctx){
        this.x = x;
        this.y = y;
        this.w= w;
        this.h= h;
        this.ctx = ctx;
        this.img = new Image();
    }
    //draw player
    draw(){
        this.img.src= "/docs/assets/images/jameshardensprite.png"
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
    touchObs(obstacle){
        return !(this.bottom() < obstacle.top() || 
                this.top() > obstacle.bottom()  ||
                this.right() < obstacle.left()  ||
                this.left() > obstacle.right()
        );
    }
}