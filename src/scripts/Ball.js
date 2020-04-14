
class Ball {
    constructor(ctx, x, y, ballRadius) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.ballRadius = ballRadius;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    }
    
}

export default Ball;

// constructor(width, height, color, x, y, type) {
    //     this.type = type;
    //     if (type === "image") {
    //         this.image = new Image();
    //         this.image.src = color;
    //     }
    //     this.width = width;
    //     this.height = height;
    //     this.x = x;
    //     this.y = y;
    // }

    // drawBall() {
    //     this.ctx.beginPath();
    //     this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    //     this.ctx.closePath();
    // }