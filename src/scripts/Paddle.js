
class Paddle {
    constructor(canvas, ctx, paddleHeight, paddleWidth, paddleX) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.paddleHeight = paddleHeight;
        this.paddleWidth = paddleWidth;
        this.paddleX = paddleX
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.ctx.fillStyle = "yellow";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Paddle;