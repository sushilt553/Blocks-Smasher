import Game from './scripts/Game';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const play = document.getElementById("home-page");
    const welcome = document.getElementById("welcome");
    play.addEventListener("click", () => {
        play.classList.add("hidden");
        welcome.classList.add("hidden");
        new Game(canvas, ctx);
    })
})
