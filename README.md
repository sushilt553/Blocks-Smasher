![](https://github.com/sushilt553/Blocks-Smasher/blob/master/dist/assets/paddle/blocks_smasher.png)
# [Play Game](https://sushilt553.github.io/Blocks-Smasher/dist/index.html)
## Overview
Blocks Smasher is a modified version of a popular in-browser game, Brick Breaker.
This game uses new JavaScript ES6 class syntax that allows for the easy breakdown of all in-game objects. The game graphics were created with the Canvas API. The game has five levels and also features different audio sounds throughout the various moments of the game. For example, game start, level change, collision effects (bricks, wall, paddle), and game over. 

## Rules/Game instructions
* User need to use the right and left arrow keys on the keyboard to control the paddle. The ball will bounce in different directions based on where it hits the paddle. 
* User is in control of the sliding paddle that can bounce the ball into the bricks above. 
* User can use angles and rebounds to control the direction the ball moves and smash the bricks. 
* User has 3 lives. 
* If the ball falls outside the paddle, user will lose a life. 
* User can also use the SPACEBAR to pause/resume the game anytime.
* User can enter their name and select a ball for the game. 
* User will have 7 ball choices to choose from.
* User is able to mute or unmute the audio in the game. 
* User should click PLAY button to begin.

## Code Highlights

The canvas API allows for graphics rendering which takes less time than regular Javascript. The code below is used to detect the collision between a ball and bricks. It also changes the direction of the ball once the bricks are smashed.

```javascript
detectCollision() {
        for (let i = 0; i < this.brickColumn; i++) {
            for (let j = 0; j < this.brickRow; j++) {
                var brick = this.bricks[i][j];
                if (brick.status) {
                    if ((this.x > brick.x && this.x < brick.x + this.brickWidth) 
                        && (this.y > brick.y && this.y < brick.y + this.brickHeight)) {
                        this.dy = - this.dy;
                        this.prevdy = this.dy;
                        brick.status = false;
                        this.points += 1;
                        this.brickCount -= 1;
                        return true;
                    }
                }
            }
        }
    }
```
The function bricksObjectArray creates an array of brick objects that have status key with boolean value. The below code allows to create bricks based on the brick object's status. Once a brick is smashed by a ball, the code below filters out the smashed bricks and continues to create bricks depending on the boolean status.  

```javascript
 bricksObjectArray() {
        for (let i = 0; i < this.brickColumn; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < this.brickRow; j++) {
                var color = tileImages[Math.floor(Math.random() * tileImages.length)]
                this.bricks[i][j] = {x: 0, y: 0, color, status: true}
            }
        }
    }

drawBricks() {
        var singleBrick;

        for (let i = 0; i < this.brickColumn; i++) {
            for (let j = 0; j < this.brickRow; j++) {
                var brick = this.bricks[i][j];
                if (brick.status) {
                    var brickX = (i * (this.brickWidth + this.brickPadding)) + this.sidePadding;
                    var brickY = (j * (this.brickHeight + this.brickPadding)) + this.sidePadding;

                    this.bricks[i][j].x = brickX;
                    this.bricks[i][j].y = brickY;

                    singleBrick = new Brick(this.ctx, brickX, brickY, this.brickWidth, this.brickHeight, brick.color);
                    singleBrick.drawBrick();
                }
            }
        }
    }
```
