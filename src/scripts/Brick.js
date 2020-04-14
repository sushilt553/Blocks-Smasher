class Brick {
    constructor(ctx, brickX, brickY, brickWidth, brickHeight) {
        this.ctx = ctx;
        this.brickX = brickX;
        this.brickY = brickY;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
    }

    drawBrick() {
        this.ctx.beginPath();
        this.ctx.rect(this.brickX, this.brickY, this.brickWidth, this.brickHeight);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

}

export default Brick;