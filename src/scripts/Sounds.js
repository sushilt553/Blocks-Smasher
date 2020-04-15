// export const brick_smash = () => {
//     const sound = new Audio("assets/sounds/brick_smash.mp3");
//     sound.play();
// }

// export const game_start = () => {
//     const sound = new Audio("assets/sounds/game_start.mp3");
//     sound.play();
//     sound.loop = true;
// }

// export const level_finish = () => {
//     const sound = new Audio("assets/sounds/level_finish.mp3");
//     sound.play();
// }

// export const lose_game = () => {
//     const sound = new Audio("assets/sounds/lose_game.mp3");
//     sound.play();
// }

// export const wall_hit = () => {
//     const sound = new Audio("assets/sounds/wall_hit.mp3");
//     sound.play();
// }

export const muteAudio = () => {
    const els = document.getElementsByClassName("sound");
    for (var j = 0; j < els.length; j++) {
        els[j].muted = true;
    }
}

export const muteMusic = () => {
    const el = document.getElementById("game-start");
    el.muted = true;
}

export const onMusic = () => {
    const el = document.getElementById("game-start");
    el.muted = false;
}

export const onAudio = () => {
    const els = document.getElementsByClassName("sound");
    for (var j = 0; j < els.length; j++) {
        els[j].muted = false;
    }
}