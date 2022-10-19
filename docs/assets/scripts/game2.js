class GameAvoid{
    constructor(){
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')
        this.player = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames= 0;
        this.width= 1090;
        this.height= 600;
        this.controls = null;
        this.lifes = 3;
        this.timer = 0;
      }



    start(){
        this.player = new Player(375, 400, 250 ,175 ,this.ctx)
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
        this.score();
        this.showLifes();
        this.checkColision();
      }

      updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].y += 7;
          this.obstacles[i].draw();
        }
    
        if (this.frames % 30 === 0) {
          this.obstacles.push(new ObstacleWarriors(this.ctx));
        }
      }

      stop(){
        this.ctx.clearRect (0,0, this.width, this.height)
        clearInterval(this.intervalId)
        this.ctx.font = '80px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`You survived ${this.timer} seconds`, 90, 300) 
        this.ctx.clearRect(0,0,1090,100)
        this.frames = 0;
        this.timer= 0;
        this.lifes = 3;
        this.player.x= 375
        this.player.y= 500 
        this.obstacles.length = 0;
        document.getElementById('again-button').style.display = "block";
      }


      // Finished
      score(){
        this.ctx.font = '30px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.timer = Math.floor(this.frames/60)
        this.ctx.fillText(`Time: ${this.timer}`, 95, 80)
      }

      showLifes(){
        this.ctx.font = '30px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Lives: ${this.lifes}`, 900, 80)
      }
    

    //FINISHED
    checkColision =()=>{
      const crash = this.obstacles.some((obstacle) =>{
        return this.player.touchObs(obstacle)
      });
      if(crash){
        for(let i= 0; i <this.obstacles.length; i++){

            if(this.player.touchObs(this.obstacles[i])){
              this.obstacles.splice(i,1)
              this.lifes -=1;
              let audio2 = new Audio('docs/assets/sounds/fail.mp3')
          audio2.play();
              if(this.lifes === 0){
                this.stop();
            }
          }
      }
    }
    }
}