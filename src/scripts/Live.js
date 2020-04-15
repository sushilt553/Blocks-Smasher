
class Live {
    constructor(ctx, width, height, x, y, image) {
        this.ctx = ctx;
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    drawLive() {
        this.ctx.beginPath();
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.ctx.closePath();
    }
}

export default Live;