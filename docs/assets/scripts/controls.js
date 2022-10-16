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
                    
                    this.player.x -=15
                    break;
                    
                case 'ArrowRight':
                    //only moves the player if is in the right space
                
                    this.player.x +=15
                    break;
                
            }
        })
    }
}