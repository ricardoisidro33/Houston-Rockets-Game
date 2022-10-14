class Game{
    constructor(){
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')
        this.player = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames= 0;
        this.width= 1000;
        this.height= 700;
        this.controls = null;
      }



      start(){
        this.player = new Player(375, 500, 250 ,175 ,this.ctx)
        //call the controls function and pass them to the player
        this.controls = new Controls(this.player);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000/60)
    }

    clear(){
        this.ctx.clearRect (0,0, this.width, this.height)
    }
    
      update = () =>{ 
        this.frames ++;
        this.clear();
        this.player.draw();
        this.intervalId = requestAnimationFrame(this.update)
      }
}