class Brick {
    constructor(ctx, brickX, brickY, brickWidth, brickHeight, color) {
        this.ctx = ctx;
        this.brickX = brickX;
        this.brickY = brickY;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.color = color;
    }

    drawBrick() {
        this.ctx.beginPath();
        this.ctx.drawImage(this.color, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
        this.ctx.closePath();
    }

}

export default Brick;