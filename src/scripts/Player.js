class Player {
    constructor(ctx, fontSize, fontStyle, fontColor, x, y, text) {
        this.ctx = ctx;
        this.fontSize = fontSize;
        this.fontStyle = fontStyle;
        this.fontColor = fontColor;
        this.text = text;
        this.x = x;
        this.y = y;
    }

    drawName() {
        this.ctx.font = this.fontSize + " " + this.fontStyle;
        this.ctx.fillStyle = this.fontColor;
        this.ctx.fillText(this.text, this.x, this.y);
    }
}

export default Player;