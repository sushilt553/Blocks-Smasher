import Ball from './Ball';
import Brick from './Brick';
import Paddle from './Paddle';

class Game {
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.draw = this.draw.bind(this);
        this.interval = setInterval(this.draw, 10);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const dx = 2;
        const dy = -2;

        var ball = new Ball(this.canvas, this.ctx, this.x, this.y);
        var paddle = new Paddle(this.canvas, this.ctx);

        ball.drawBall();
        paddle.drawPaddle();
        this.x += dx;
        this.y += dy;
    }
}

export default Game;