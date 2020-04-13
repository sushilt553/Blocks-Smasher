import Ball from './Ball';
import Brick from './Brick';
import Paddle from './Paddle';

class Game {
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
        this.draw = this.draw.bind(this);
        this.checkWallHit = this.checkWallHit.bind(this);
        this.interval = setInterval(this.draw, 10);
    }

    checkWallHit() {
        if (this.x + this.dx > this.canvas.width || this.x + this.dx < 0) {
            this.dx = - this.dx;
        }else if(this.y + this.dy < 0) {
            this.dy = - this.dy;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        var ball = new Ball(this.canvas, this.ctx, this.x, this.y);
        var paddle = new Paddle(this.canvas, this.ctx);

        ball.drawBall();
        paddle.drawPaddle();
        this.checkWallHit();
        this.x += this.dx;
        this.y += this.dy;
    }
}

export default Game;