
class Paddle {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth);
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Paddle;