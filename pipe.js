class Pipe{
    constructor(Game){
        this.game = Game;
        this.distance = 100;
        this.pipeUp = new PIXI.Sprite.from("images/pipe-up.png");
        this.pipeUp.x = 200;
        this.pipeUp.y = -200;
        this.pipeUp.width = 52;
        this.pipeUp.height = 320;
        this.pipeDown = new PIXI.Sprite.from("images/pipe-down.png");
        this.pipeDown.x = 200;
        this.pipeDown.y =250;

        this.audioPoint = new Audio("audio/audio_point.mp3");
        this.audioHit = new Audio("audio/audio_hit.mp3");
        
        this.draw();
    }
    draw(){
        this.game.app.stage.addChild(this.pipeUp);
        this.game.app.stage.addChild(this.pipeDown);
    }
    update(){
        this.game.app.ticker.add(() => {
            this.pipeUp.x += -2;
            this.pipeDown.x += -2;
            if(this.pipeUp.x <= -52 && this.pipeDown.x <= -52){
                //increase points
                this.pipeUp.y = Math.floor(Math.random() * -200);
                this.pipeDown.y = this.pipeUp.y + this.pipeUp.height + this.distance; 
                this.game.score ++;
                this.audioPoint.play();
                this.game.scoreText.text = "Score : " + this.game.score;
                this.pipeUp.x = 300;
                this.pipeDown.x = 300;
            }
        })
    }
    collision(){
        let bird = this.game.bird.bird;
        this.game.app.ticker.add(() => {
            if(bird.x + bird.width > this.pipeUp.x && bird.x < this.pipeUp.x + this.pipeUp.width && bird.y < this.pipeUp.y + this.pipeUp.height ||
                bird.x + bird.width > this.pipeDown.x && bird.x < this.pipeDown.x + this.pipeDown.width && bird.y + bird.height> this.pipeDown.y){
                this.audioHit.play();
                this.game.scoreText.text = "Score : " + this.game.score;
                this.game.scoreText.x = 55;
                this.game.scoreText.y = 250;
                this.game.gameOver.draw();
                this.game.app.ticker.stop();
            }
        })
        
    }

}