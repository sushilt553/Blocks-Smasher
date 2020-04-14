!function(t){var i={};function s(h){if(i[h])return i[h].exports;var e=i[h]={i:h,l:!1,exports:{}};return t[h].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,i,h){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:h})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var h=Object.create(null);if(s.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)s.d(h,e,function(i){return t[i]}.bind(null,e));return h},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=0)}([function(t,i,s){"use strict";s.r(i);var h=class{constructor(t,i,s,h,e,a){this.ctx=t,this.image=h,this.width=i,this.height=s,this.x=e,this.y=a}drawBall(){this.ctx.beginPath(),this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height),this.ctx.closePath()}};var e=class{constructor(t,i,s,h,e){this.ctx=t,this.brickX=i,this.brickY=s,this.brickWidth=h,this.brickHeight=e}drawBrick(){this.ctx.beginPath(),this.ctx.rect(this.brickX,this.brickY,this.brickWidth,this.brickHeight),this.ctx.fillStyle="green",this.ctx.fill(),this.ctx.closePath()}};var a=class{constructor(t,i,s,h,e){this.canvas=t,this.ctx=i,this.paddleHeight=s,this.paddleWidth=h,this.paddleX=e}drawPaddle(){this.ctx.beginPath(),this.ctx.rect(this.paddleX,this.canvas.height-this.paddleHeight,this.paddleWidth,this.paddleHeight),this.ctx.fillStyle="yellow",this.ctx.fill(),this.ctx.closePath()}};var r=class{constructor(t,i,s,h,e,a,r){this.ctx=t,this.fontSize=i,this.fontStyle=s,this.fontColor=h,this.text=r,this.x=e,this.y=a}drawScore(){this.ctx.font=this.fontSize+" "+this.fontStyle,this.ctx.fillStyle=this.fontColor,this.ctx.fillText(this.text,this.x,this.y)}};const c=new Image;c.src="assets/balls/ball1.png",(new Image).src="assets/balls/ball2.png",(new Image).src="assets/balls/ball3.png",(new Image).src="assets/balls/ball4.png",(new Image).src="assets/balls/ball5.png",(new Image).src="assets/balls/ball6.png",(new Image).src="assets/balls/ball7.png",(new Image).src="assets/playRestart/playButton.png";const l=new Image;l.src="assets/playRestart/restartButton.png";var n=class{constructor(t,i,s){this.canvas=t,this.ctx=i,this.text=s}drawFinalScore(){this.ctx.font="50px Consolas",this.ctx.fillStyle="white",this.ctx.fillText(this.text,180,this.canvas.height/2)}drawRestartButton(){this.ctx.beginPath(),this.ctx.drawImage(l,420,this.canvas.height/2+30,50,50),this.ctx.closePath()}};var d=class{constructor(t,i,s){this.canvas=t,this.ctx=i,this.text=s}drawWinMessage(){this.ctx.font="50px Consolas",this.ctx.fillStyle="white",this.ctx.fillText(this.text,120,this.canvas.height/2)}};var o=class{constructor(t,i){this.canvas=t,this.ctx=i,this.x=this.canvas.width/2,this.y=this.canvas.height-30,this.ballRadius=10,this.dx=2,this.dy=-2,this.brickRow=1,this.brickColumn=1,this.brickWidth=144,this.brickHeight=30,this.brickPadding=20,this.sidePadding=50,this.brickCount=this.brickRow*this.brickColumn,this.bricks=[],this.paddleHeight=10,this.paddleWidth=120,this.paddleX=this.canvas.width/2,this.points=0,this.rightClick=!1,this.leftClick=!1,this.draw=this.draw.bind(this),this.checkWallHit=this.checkWallHit.bind(this),this.drawBricks=this.drawBricks.bind(this),this.detectCollision=this.detectCollision.bind(this),this.onClick=this.onClick.bind(this),this.offClick=this.offClick.bind(this),this.bricksObjectArray(),this.interval=setInterval(this.draw,8),document.addEventListener("keydown",this.onClick),document.addEventListener("keyup",this.offClick)}onClick(t){"Right"===t.key||"ArrowRight"===t.key?this.rightClick=!0:"Left"!==t.key&&"ArrowLeft"!==t.key||(this.leftClick=!0)}offClick(t){"Right"===t.key||"ArrowRight"===t.key?this.rightClick=!1:"Left"!==t.key&&"ArrowLeft"!==t.key||(this.leftClick=!1)}checkWallHit(){if(this.x+this.dx>this.canvas.width-this.ballRadius||this.x+this.dx<this.ballRadius)return this.dx=-this.dx,!0;if(this.y+this.dy<this.ballRadius)return this.dy=-this.dy,!0;if(this.y+this.dy>this.canvas.height-this.ballRadius){if(this.x>this.paddleX&&this.x<this.paddleX+this.paddleWidth)return this.dy=-this.dy,!0;var t=`Game Over!! Your score is ${this.points}`;new n(this.canvas,this.ctx,t).drawFinalScore(),document.getElementById("restart").onclick=()=>document.location.reload(),clearInterval(this.interval)}}bricksObjectArray(){for(let t=0;t<this.brickColumn;t++){this.bricks[t]=[];for(let i=0;i<this.brickRow;i++)this.bricks[t][i]={x:0,y:0,status:!0}}}detectCollision(){for(let i=0;i<this.brickColumn;i++)for(let s=0;s<this.brickRow;s++){var t=this.bricks[i][s];if(t.status&&this.x>t.x&&this.x<t.x+this.brickWidth&&this.y>t.y&&this.y<t.y+this.brickHeight)return this.dy=-this.dy,t.status=!1,this.points+=1,this.brickCount-=1,!0}}drawBricks(){for(let s=0;s<this.brickColumn;s++)for(let h=0;h<this.brickRow;h++){if(this.bricks[s][h].status){var t=s*(this.brickWidth+this.brickPadding)+this.sidePadding,i=h*(this.brickHeight+this.brickPadding)+this.sidePadding;this.bricks[s][h].x=t,this.bricks[s][h].y=i,new e(this.ctx,t,i,this.brickWidth,this.brickHeight).drawBrick()}}}draw(){(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),0===this.brickCount)&&(new d(this.canvas,this.ctx,"Congratulations you won this level").drawWinMessage(),clearInterval(this.interval));this.drawBricks(),new r(this.ctx,"30px","Consolas","white",this.canvas.width-150,30,`Score: ${this.points}`).drawScore();var t=new h(this.ctx,15,15,c,this.x,this.y),i=new a(this.canvas,this.ctx,this.paddleHeight,this.paddleWidth,this.paddleX);t.drawBall(),i.drawPaddle(),this.detectCollision(),this.checkWallHit(),this.rightClick?this.paddleX+this.paddleWidth<this.canvas.width&&(this.paddleX+=7):this.leftClick&&this.paddleX>0&&(this.paddleX-=7),this.x+=this.dx,this.y+=this.dy}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("myCanvas"),i=t.getContext("2d");new o(t,i)})}]);