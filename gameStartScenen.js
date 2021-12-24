class GameStart{
    constructor(Game){
        this.game = Game;
        this.gameStartSprite = new PIXI.Sprite.from("images/message.png");
        this.gameStartSprite.x = 50;
        this.gameStartSprite.y = 100; 
    }
    draw(){
        this.game.app.stage.addChild(this.gameStartSprite);
    }
    hidden(){
        this.gameStartSprite.visible = false;
    }
}