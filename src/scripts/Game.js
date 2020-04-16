import Ball from './Ball';
import Brick from './Brick';
import Paddle from './Paddle';
import Score from './Score';
import GameOver from './GameOver';
// import ballImages from './BallsImages';
import tileImages from './TilesImages';
import { paddleImage, liveImage } from './PaddleImage';
import levelsArray from './levels/Levels';
// import { brick_smash, lose_game, wall_hit } from './Sounds';
import WinLevel from './WinLevel';
import Live from './Live';
import Complete from './Complete';
import Player from './Player';

class Game {
    constructor (canvas, ctx, playerName, ball) {
        this.brickSmash = document.getElementById("brick-smash");
        this.wallHit = document.getElementById("wall-hit");
        this.loseGame = document.getElementById("lose-game");
        this.levelFinish = document.getElementById("level-finish");
        this.pause = document.getElementById("pause");
        this.space = document.getElementById("space");
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerName = playerName;
        this.ball = ball;
        this.levels = levelsArray;
        this.nextLevelIndex = 0;

        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.ballRadius = 10;
        this.dx = 2;
        this.dy = -2;

        // this.ballImage = ballImages[Math.floor(Math.random() * ballImages.length)];

        this.liveImage = liveImage;

        this.brickRow = this.levels[0].tilesRow;
        this.brickColumn = this.levels[0].tilesColumn;
        this.brickWidth = 144;
        this.brickHeight = 30;
        this.brickPadding = 20; 
        this.sidePadding = 50;
        this.brickCount = this.brickRow * this.brickColumn;
        this.bricks = [];

        this.paddleHeight = 18;
        this.paddleWidth = 120;
        this.paddleX = this.canvas.width/2;
        // this.paddleX = (this.canvas.width - this.paddleWidth);

        this.points = 0;
        this.lives = 3;

        this.rightClick = false;
        this.leftClick = false;
        this.spaceClick = true;

        this.spaceClickEvent = this.spaceClickEvent.bind(this);

        this.draw = this.draw.bind(this);
        this.checkWallHit = this.checkWallHit.bind(this);

        this.drawBricks = this.drawBricks.bind(this);
        this.detectCollision = this.detectCollision.bind(this);

        this.reset = this.reset.bind(this);

        this.onClick = this.onClick.bind(this);
        this.offClick = this.offClick.bind(this);
        this.bricksObjectArray = this.bricksObjectArray.bind(this);
        this.bricksObjectArray();

        this.start = this.start.bind(this);
        this.start(this.levels[0].renderTime);

        this.prevdx = this.dx;
        this.prevdy = this.dy;

        document.addEventListener("keydown", this.onClick);
        document.addEventListener("keyup", this.offClick);

        document.addEventListener("keypress", this.spaceClickEvent);
    }

    spaceClickEvent(e) {
        if (e.keyCode === 32 && this.spaceClick) {
            this.pause.classList.add("display");
            this.space.classList.add("display");
            this.dx = 0;
            this.dy = 0;
            this.spaceClick = false;
        } else if (this.spaceClick || e.keyCode === 32) {
            this.pause.classList.remove("display");
            this.space.classList.remove("display");
            this.dx = this.prevdx;
            this.dy = this.prevdy;
            this.spaceClick = true;
        }
    }

    onClick(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightClick = true;
        }else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftClick = true;
        }
    }

    offClick(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightClick = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftClick = false;
        }
    }

    checkWallHit() {
        if (this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = - this.dx;
            this.prevdx = this.dx;
            return true;
            // this.dy -= 1;
        }else if(this.y + this.dy < this.ballRadius) {
            this.dy = - this.dy;
            this.prevdy = this.dy;
            return true;
        }else if (this.y + this.dy > this.canvas.height - this.ballRadius - this.paddleHeight) {
            if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
                this.dy = - this.dy;
                this.prevdy = this.dy;
                return true;
                // this.dx += 1;
            }else {
                this.loseGame.play();
                this.lives -= 1;
                this.reset();

            }
        }
    }

    bricksObjectArray() {

        for (let i = 0; i < this.brickColumn; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < this.brickRow; j++) {
                var color = tileImages[Math.floor(Math.random() * tileImages.length)]
                this.bricks[i][j] = {x: 0, y: 0, color, status: true}
            }
        }
    }


    detectCollision() {

        for (let i = 0; i < this.brickColumn; i++) {
            for (let j = 0; j < this.brickRow; j++) {
                var brick = this.bricks[i][j];
                if (brick.status) {
                    if ((this.x > brick.x && this.x < brick.x + this.brickWidth) && (this.y > brick.y && this.y < brick.y + this.brickHeight)) {
                        this.dy = - this.dy;
                        this.prevdy = this.dy;
                        brick.status = false;
                        this.points += 1;
                        this.brickCount -= 1;
                        return true;
                    }
                }
            }
        }
    }

    drawBricks() {
        var singleBrick;

        for (let i = 0; i < this.brickColumn; i++) {
            for (let j = 0; j < this.brickRow; j++) {
                var brick = this.bricks[i][j];
                if (brick.status) {
                    var brickX = (i * (this.brickWidth + this.brickPadding)) + this.sidePadding;
                    var brickY = (j * (this.brickHeight + this.brickPadding)) + this.sidePadding;

                    this.bricks[i][j].x = brickX;
                    this.bricks[i][j].y = brickY;

                    singleBrick = new Brick(this.ctx, brickX, brickY, this.brickWidth, this.brickHeight, brick.color);
                    singleBrick.drawBrick();
                }
            }
        }
    }

    start(renderTime) {
        this.interval = setInterval(this.draw, renderTime);
    }

    reset() {
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
        this.brickRow = this.levels[this.nextLevelIndex].tilesRow;
        this.brickColumn = this.levels[this.nextLevelIndex].tilesColumn;
        this.brickCount = this.brickRow * this.brickColumn;
        this.bricks = [];
        this.bricksObjectArray();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        var player = new Player(this.ctx, "30px", "Consolas", "white", 5, 30, `Welcome ${this.playerName}!`);
        player.drawName();
        var live = new Live(this.ctx, 35, 30, this.canvas.width - 240, 5, this.liveImage); 
        live.drawLive();
        var score = new Score(this.ctx, "30px", "Consolas", "white", this.canvas.width - 200, 30, `x ${this.lives}     Score: ${this.points}`)
        score.drawScore();

        if (this.lives === 0) {
            const restart = document.getElementById("restart-button");
            restart.classList.add("display");
            restart.onclick = () => document.location.reload();
            
            var text = `Game Over!!! Your score is ${this.points}`
            var gameOver = new GameOver(this.canvas, this.ctx, text)
            gameOver.drawFinalScore();
            // gameOver.drawRestartButton();
            clearInterval(this.interval);
        }

        this.drawBricks();
        // const color = "assets/balls/ball1.png";
        var ball = new Ball(this.ctx, 20, 20, this.ball, this.x, this.y);
        // var ball = new Ball(this.ctx, this.x, this.y, this.ballRadius);
        var paddle = new Paddle(this.canvas, this.ctx, this.paddleHeight, this.paddleWidth, this.paddleX, paddleImage);

        ball.drawBall();
        paddle.drawPaddle();

        if (this.brickCount === 0) {
            var winLevelMessage = new WinLevel(this.canvas, this.ctx, `Congrats! You won this level.`);
            winLevelMessage.drawWinMessage();
            
            this.nextLevelIndex += 1;
            if (this.nextLevelIndex < 5) {
                this.reset();
                var renderTime = this.levels[this.nextLevelIndex].renderTime
                
                clearInterval(this.interval);
                const nextLevel = document.getElementById("next-level");
                nextLevel.classList.add("display");
                this.levelFinish.play();
                nextLevel.onclick = () => {
                    nextLevel.classList.remove("display");
                    this.start(renderTime);
                }
            }else{
                this.dx = 0;
                this.dy = 0;
                const text = "ALL LEVELS COMPLETED"
                const complete = new Complete(this.canvas, this.ctx, text);
                complete.drawComplete();
                const restart = document.getElementById("restart-button");
                restart.classList.add("display");
                restart.onclick = () => document.location.reload();
            }

        }

        if (this.detectCollision()) {
            this.brickSmash.play();
        };
            
        if (this.checkWallHit()) {
            this.wallHit.play();
        }

        if (this.rightClick) {
            if (this.paddleX + this.paddleWidth < this.canvas.width ){
                this.paddleX += 7;
            }
        }else if (this.leftClick) {
            if (this.paddleX > 0) {
                this.paddleX -= 7;
            }
        }

        this.x += this.dx;
        this.y += this.dy;

    }
}

export default Game;