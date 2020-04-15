
class Paddle {
    constructor(canvas, ctx, paddleHeight, paddleWidth, paddleX, paddleImage) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.paddleHeight = paddleHeight;
        this.paddleWidth = paddleWidth;
        this.paddleX = paddleX;
        this.paddleImage = paddleImage;
    }

    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.drawImage(this.paddleImage, this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight)
        this.ctx.closePath();
    }
}

export default Paddle;