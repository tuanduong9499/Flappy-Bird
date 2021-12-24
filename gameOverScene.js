class GameOver{
    constructor(Game){
        this.game = Game;
        this.gameOverSprite = new PIXI.Sprite.from("images/gameover.png");
        this.gameOverSprite.x = 50;
        this.gameOverSprite.y = 200; 
    }
    draw(){
        this.game.app.stage.addChild(this.gameOverSprite);
    }
 
}