
window.onload = () =>{
    document.getElementById('start-button').onclick =() => {
        document.getElementById('start-button').style.display = "none";
        document.getElementById('game1').style.display = "block";
        document.getElementById('game2').style.display = "block";
    }

    document.getElementById('game1').onclick =() => {
        document.getElementById('again-button').style.display = "block";
        document.getElementById('game1').style.display = "none";
        document.getElementById('game2').style.display = "none";
        startGame();
    }

    document.getElementById('again-button').onclick =() => {
        
    }

    //function to start the game
    function startGame(){
        // create game and start game
        let game = new Game()
        game.start();
    }
    


    

}