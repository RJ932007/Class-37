class Game{
    constructor(){}
    getState(){
        var getStateRef=database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameStateRef=data.val();
        });
    }
    updateState(state){
        database.ref('gameState').update({
            gameState:state
        });
    }

    start(){}
    
    play(){}

    end(){}
}