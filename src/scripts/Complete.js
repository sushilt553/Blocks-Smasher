// import {restartButtonImage} from "./Images";

class Complete {
  constructor(canvas, ctx, text) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.text = text;
  }

  drawComplete() {
    this.ctx.font = "50px Consolas";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.text, 150, this.canvas.height / 2 + 80);
  }

}

export default Complete;
