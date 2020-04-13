import Game from './scripts/Game';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const game = new Game(canvas, ctx);
})
