import Ball from './Ball';
import Brick from './Brick';
import Paddle from './Paddle';

class Game {
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.ballRadius = 10;
        this.dx = 2;
        this.dy = -2;

        this.brickRow = 5;
        this.brickColumn = 5;
        this.brickWidth = 144;
        this.brickHeight = 30;
        this.brickPadding = 20; 
        this.sidePadding = 50;
        this.bricks = [];

        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth);

        this.rightClick = false;
        this.leftClick = false;

        this.draw = this.draw.bind(this);
        this.checkWallHit = this.checkWallHit.bind(this);

        this.drawBricks = this.drawBricks.bind(this);
        this.detectCollision = this.detectCollision.bind(this);

        this.onClick = this.onClick.bind(this);
        this.offClick = this.offClick.bind(this);
        this.bricksObjectArray();

        this.interval = setInterval(this.draw, 8);

        document.addEventListener("keydown", this.onClick);
        document.addEventListener("keyup", this.offClick);
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
            // this.dy -= 1;
        }else if(this.y + this.dy < this.ballRadius) {
            this.dy = - this.dy;
        }else if (this.y + this.dy > this.canvas.height - this.ballRadius) {
            if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
                this.dy = - this.dy;
                // this.dx += 1;
            }else {
                alert("Game Over");
                clearInterval();
            }
        }
    }

    bricksObjectArray() {

        for (let i = 0; i < this.brickColumn; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < this.brickRow; j++) {
                this.bricks[i][j] = {x: 0, y: 0, status: true}
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
                        brick.status = false;
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

                    singleBrick = new Brick(this.ctx, brickX, brickY, this.brickWidth, this.brickHeight);
                    singleBrick.drawBrick();
                }
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBricks();
        // const image = require("../assets/balls/ball1.png");
        // var ball = new Ball(15, 15, image, this.x, this.y, "image");
        var ball = new Ball(this.ctx, this.x, this.y, this.ballRadius);
        var paddle = new Paddle(this.canvas, this.ctx, this.paddleHeight, this.paddleWidth, this.paddleX);

        ball.drawBall();
        paddle.drawPaddle();

        this.detectCollision();
        this.checkWallHit();

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