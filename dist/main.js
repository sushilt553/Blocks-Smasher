!function(t){var i={};function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=1)}([function(t,i){},function(t,i,s){"use strict";s.r(i);var e=class{constructor(t,i,s,e,a){this.canvas=t,this.ctx=i,this.x=s,this.y=e,this.ballRadius=a}drawBall(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.ballRadius,0,2*Math.PI),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath()}};s(0);var a=class{constructor(t,i){this.canvas=t,this.ctx=i,this.paddleHeight=10,this.paddleWidth=75,this.paddleX=this.canvas.width-this.paddleWidth}drawPaddle(){this.ctx.beginPath(),this.ctx.rect(this.paddleX,this.canvas.height-this.paddleHeight,this.paddleWidth,this.paddleHeight),this.ctx.fillStyle="red",this.ctx.fill(),this.ctx.closePath()}};var h=class{constructor(t,i){this.canvas=t,this.ctx=i,this.x=this.canvas.width/2,this.y=this.canvas.height-30,this.ballRadius=10,this.dx=2,this.dy=-2,this.draw=this.draw.bind(this),this.checkWallHit=this.checkWallHit.bind(this),this.interval=setInterval(this.draw,10)}checkWallHit(){this.x+this.dx>this.canvas.width-this.ballRadius||this.x+this.dx<this.ballRadius?this.dx=-this.dx:this.y+this.dy<this.ballRadius?this.dy=-this.dy:this.y+this.dy>this.canvas.height+this.ballRadius&&(alert("Game Over"),clearInterval())}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var t=new e(this.canvas,this.ctx,this.x,this.y,this.ballRadius),i=new a(this.canvas,this.ctx);t.drawBall(),i.drawPaddle(),this.checkWallHit(),this.x+=this.dx,this.y+=this.dy}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("myCanvas"),i=t.getContext("2d");new h(t,i)})}]);