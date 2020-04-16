class WinLevel {
    constructor(canvas, ctx, text) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.text = text
    }

    drawWinMessage() {
        this.ctx.font = "50px Consolas";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.text, 170, (this.canvas.height / 2) - 20);
    }
}

export default WinLevel;
