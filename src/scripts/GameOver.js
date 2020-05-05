// import {restartButtonImage} from "./Images";

class GameOver {
    constructor(canvas, ctx, text) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.text = text
    }

    drawFinalScore() {
        this.ctx.font = "50px Sans-serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.text, 150, this.canvas.height / 2);
    }

    // drawRestartButton() {
    //     this.ctx.beginPath();
    //     this.ctx.drawImage(restartButtonImage, 420, (this.canvas.height / 2) + 30, 50, 50);
    //     this.ctx.closePath();
    // }
}

export default GameOver;
