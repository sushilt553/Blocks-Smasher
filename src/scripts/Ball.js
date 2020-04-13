
class Ball {
    constructor(canvas, ctx, x, y) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.ballRadius = 10;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Ball;