class Controls{
    constructor(player){
        this.player = player
    }

    keyboardEvents(){
        //Creating the controls
        window.addEventListener('keydown', (e)=>{
            switch(e.code){
                case 'ArrowLeft':
                    //only moves the player if is in the right space
                    if(this.player.x > -80){
                    this.player.x -=30
                    break;
                    }
                case 'ArrowRight':
                    //only moves the player if is in the right space
                    if(this.player.x + this.player.w <= 1170){
                    this.player.x +=30
                    break;
                    }
            }
        })
    }
}