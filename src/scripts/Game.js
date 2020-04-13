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
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.rightClick = false;
        this.leftClick = false;
        this.paddleX = (this.canvas.width - this.paddleWidth);
        this.draw = this.draw.bind(this);
        this.checkWallHit = this.checkWallHit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.offClick = this.offClick.bind(this);
        this.interval = setInterval(this.draw, 10);

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
        }else if(this.y + this.dy < this.ballRadius) {
            this.dy = - this.dy;
        }else if (this.y + this.dy > this.canvas.height + this.ballRadius) {
            alert("Game Over");
            clearInterval();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        var ball = new Ball(this.canvas, this.ctx, this.x, this.y, this.ballRadius);
        var paddle = new Paddle(this.canvas, this.ctx, this.paddleHeight, this.paddleWidth, this.paddleX);

        ball.drawBall();
        paddle.drawPaddle();
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