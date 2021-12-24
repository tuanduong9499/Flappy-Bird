
class Game{
    constructor(){
        this.app = null;
        this.background = null;
        this.base = null;
        this.scoreText = this.scoreText = new PIXI.Text("Score : 0", {fontFamily : 'Orbitron', fontSize: 24, fill : 0xFF120E, align : 'center'});;
        this.score = 0;
        this.init();
        this.draw();
        this.update();
    }
    init(){
        this.app = new PIXI.Application({
            width : 288,
            height : 512
        });
        document.body.appendChild(this.app.view);
        
        //game board
        this.background = new PIXI.Sprite.from("images/background-day.png");
        this.app.stage.addChild(this.background);
        
        //pipe
        this.pipe = new Pipe(this);

        //base
        this.base = new PIXI.Sprite.from("images/base.png"); 
        this.base.x = 0;
        this.base.y = 400;
        this.app.stage.addChild(this.base);

        //game start scene
        this.gameStart = new GameStart(this);
        this.gameOver = new GameOver(this);
         //bird
         this.bird = new Bird(this);
         //score
        this.app.stage.addChild(this.scoreText);
        this.scoreText.x = 10;
        this.scoreText.y = 420;
       
    }
    draw(){
        this.gameStart.draw();
        this.gameStart.gameStartSprite.interactive = true;
        this.gameStart.gameStartSprite.on("pointerdown",() => {
            this.gameStart.hidden();
            this.bird.falling();
            this.pipe.collision();
            this.pipe.update();
            this.bird.collision();
        })
    }
    update(){
        this.bird.flap();
    }
}

var g = new Game();