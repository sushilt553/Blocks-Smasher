import Game from './scripts/Game';
import { muteAudio, onAudio, muteMusic, onMusic } from './scripts/Sounds';
// import {game_start} from './scripts/Sounds';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const unMute = document.getElementsByClassName("volume-up")[0];
    const mute = document.getElementsByClassName("volume-down")[0];
    const gameMusic = document.getElementById("game-start");
    
    unMute.onclick = () => {
        mute.classList.remove("red");
        unMute.classList.add("green");
        if (document.getElementById("welcome").classList.value === "hidden"){
            onAudio();
        }else{
            onAudio();
            onMusic();
        }
        gameMusic.play();   
        gameMusic.loop = true; 
    };

    mute.onclick = () => {
        unMute.classList.remove("green");
        mute.classList.add("red");
        muteAudio();
        muteMusic();
    }

    const play = document.getElementById("home-page");
    const welcome = document.getElementById("welcome");
    const instructions = document.getElementById("play-div");
    const player = document.getElementById("player-name");
    const selectBall = document.getElementById("select-balls");
    
    play.addEventListener("click", () => {
        var playerName;
        if (player.value){
            playerName = player.value
        }else{
            playerName = "User"
        }

        var ball;
        if (selectBall.value === "--Choose a ball--") {
            ball = document.getElementById("golfball");
        }else{
            ball = document.getElementById(selectBall.value);
        }

        
        muteMusic();
        instructions.classList.add("hidden");
        canvas.classList.add("removeBackground");
        play.classList.add("hidden");
        welcome.classList.add("hidden");
        player.classList.add("hidden");
        selectBall.classList.add("hidden");
        new Game(canvas, ctx, playerName, ball);
    })
})
