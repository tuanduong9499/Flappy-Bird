class Bird{
    constructor(Game){
        this.game = Game;
        this.bird = new PIXI.Sprite.from("images/bird.png");
        this.bird.x = 30;
        this.bird.y = 150;
        this.v = 3;
        this.audioWing = new Audio("audio/audio_wing.mp3")
        this.draw(); 
    }
    draw(){
        this.game.app.stage.addChild(this.bird);
    }
    falling(){
        this.game.app.ticker.add(() => {
            this.bird.y +=  this.v;
        });
    }
    flap(){
        document.addEventListener("click", () => {
            this.audioWing.play();
            this.bird.y += - 50;
        });
    }
    collision(){
        this.game.app.ticker.add(() => {
            if(this.bird.y >= 400 - 20){
                this.game.scoreText.text = "Score : " + this.game.score;
                this.game.scoreText.x = 50;
                this.game.scoreText.y = 250;
                this.game.gameOver.draw();
                this.game.app.ticker.stop();
            }
        })
    }
}