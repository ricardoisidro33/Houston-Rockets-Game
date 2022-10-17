class Game{
    constructor(){
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')
        this.player = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames= 0;
        this.width= 1300;
        this.height= 700;
        this.points= 0;
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
        this.frames++;
        this.clear();
        this.player.draw();
        this.updateObstacles();
        this.checkColision();
        this.score();
      }

      updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].y += 4;
          this.obstacles[i].draw();
        }
    
        if (this.frames % 90 === 0) {
          this.obstacles.push(new Obstacle(this.ctx));
        }
      }

      stop(){
        clearInterval(this.intervalId)
      }


      // WORKING BUT SCORE IS NOT OK
      score(){
        this.ctx.font = '30px monospace'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Score: ${this.points}`, 50, 80)
      }

    
    //NOT FINISHED
    checkColision =()=>{
      const crash = this.obstacles.some((obstacle) =>{
        return this.player.touchObs(obstacle)
      });
      if(crash){
        
        this.points++;
      }
      for(let i= 0; i <this.obstacles.length; i++){
        if(this.player.touchObs(this.obstacles[i])){
          this.obstacles.splice(i,1)
        }
      }
    }
}