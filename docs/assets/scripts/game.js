class GameCatch{
    constructor(){
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')
        this.player = null;
        this.obstacles = [];
        this.intervalId = null;
        this.frames= 0;
        this.width= 1090;
        this.height= 600;
        this.points= 0;
        this.controls = null;
        this.lifes = 3;

      }



    start(){
        this.player = new Player(375, 400, 250 ,175 ,this.ctx)
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
        this.warning();
      }

      updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
          if(this.points >= 10 && this.points < 25){
            this.obstacles[i].y += 5;
          this.obstacles[i].draw();
          }
          else if(this.points >= 25 && this.points <50){
            this.obstacles[i].y += 7;
          this.obstacles[i].draw();
          }
          else if(this.points >= 50){
            this.obstacles[i].y += 10;
          this.obstacles[i].draw();
          }
          else{
          this.obstacles[i].y += 3;
          this.obstacles[i].draw();
          }
        }
    
        if (this.frames % 90 === 0) {
          this.obstacles.push(new ObstacleRockets(this.ctx));
        }
      }

      stop(){
        this.ctx.clearRect (0,0, this.width, this.height)
        clearInterval(this.intervalId)
        this.ctx.font = '100px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Score: ${this.points}`, 350, 250)
      this.frames = 0;
      this.points= 0;
      this.lifes = 3;
      this.player.x= 375
      this.player.y= 500 
      this.obstacles.length = 0;
      document.getElementById('again-button').style.display = "block";
      }



      warning(){
        if(this.points >= 9){
        this.ctx.font = '50px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`WARNING, ABOUT TO SPEED UP!`, 250, 250)
        }
      }


      // Finished
      score(){
        this.ctx.font = '30px Luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Score: ${this.points}`, 95, 80)
      }

      showLifes(){
        this.ctx.font = '30px luckiest Guy'
        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Lives: ${this.lifes}`, 900, 80)
      }
    

    //FINISHED
    checkColision =()=>{
      const crash = this.obstacles.some((obstacle) =>{
        return this.player.touchObs(obstacle)
      });
      if(crash){
        let audio1 = new Audio('docs/assets/sounds/swish.mp3')
        audio1.play();
        this.points++;
      }
      for(let i= 0; i <this.obstacles.length; i++){

        if(this.player.touchObs(this.obstacles[i])){
          this.obstacles.splice(i,1)

        } else if(this.obstacles[i].y > 550){
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