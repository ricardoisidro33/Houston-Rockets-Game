
window.onload = () =>{
    document.getElementById('start-button').onclick =() => {
        document.getElementById('start-button').style.display = "none";
        document.getElementById('game1').style.display = "block";
        document.getElementById('game2').style.display = "block";
    }

    document.getElementById('game1').onclick =() => {
        
        document.getElementById('game1').style.display = "none";
        document.getElementById('game2').style.display = "none";
        startGame1();
    }


    document.getElementById('game2').onclick =() => {
        
        document.getElementById('game1').style.display = "none";
        document.getElementById('game2').style.display = "none";
        startGame2();
    }

    document.getElementById('again-button').onclick =() => {
        document.getElementById('again-button').style.display = "none";
        document.getElementById('game1').style.display = "block";
        document.getElementById('game2').style.display = "block";
    }

    //function to start the game
    function startGame1(){
        // create game and start game
        let game = new GameCatch()
        game.start();
    }
    
    function startGame2(){
        // create game and start game
        let game = new GameAvoid()
        game.start();
    }    

    
}