
window.onload = () =>{
    document.getElementById('start-button').onclick =() => {
        startGame();
    }
    //function to start the game
    function startGame(){
        // create game and start game
        let game = new Game()
        game.start();
    }
    
}