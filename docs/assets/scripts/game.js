class GameCatch{
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
        this.lifes = 3;

      }



    start(){
        this.player = new Player(375, 500, 250 ,175 ,this.ctx)
        //call the controls function and pass them to the player
        this.controls = new Controls(this.player);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000/60)
    }

    resetGame(){
      clearInterval(this.intervalId)
      this.frames = 0;
      this.clear();
      this.points= 0;
      this.lifes = 3;
      this.player.x= 375
      this.player.y= 500 
      this.obstacles.length = 0;
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
        this.showLifes();
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
        this.ctx.clearRect (0,0, this.width, this.height)
        clearInterval(this.intervalId)
        this.ctx.font = '100px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Score: ${this.points}`, 450, 250)
      this.frames = 0;
      this.points= 0;
      this.lifes = 3;
      this.player.x= 375
      this.player.y= 500 
      this.obstacles.length = 0;
      }


      // Finished
      score(){
        this.ctx.font = '30px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Score: ${this.points}`, 95, 87)
      }

      showLifes(){
        this.ctx.font = '30px luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Lives: ${this.lifes}`, 1000, 87)
      }
    

    //FINISHED
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

        } else if(this.obstacles[i].y > 620){
          this.obstacles.splice(i,1)
          this.lifes -=1;
          if(this.lifes === 0){
              this.stop();
          }
        }
      }
    }
}