!function(t){var i={};function s(e){if(i[e])return i[e].exports;var h=i[e]={i:e,l:!1,exports:{}};return t[e].call(h.exports,h,h.exports,s),h.l=!0,h.exports}s.m=t,s.c=i,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var h in t)s.d(e,h,function(i){return t[i]}.bind(null,h));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=1)}([function(t,i){},function(t,i,s){"use strict";s.r(i);var e=class{constructor(t,i,s,e){this.canvas=t,this.ctx=i,this.x=s,this.y=e,this.ballRadius=10}drawBall(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.ballRadius,0,2*Math.PI),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath()}};s(0);var h=class{constructor(t,i){this.canvas=t,this.ctx=i,this.paddleHeight=10,this.paddleWidth=75,this.paddleX=this.canvas.width-this.paddleWidth}drawPaddle(){this.ctx.beginPath(),this.ctx.rect(this.paddleX,this.canvas.height-this.paddleHeight,this.paddleWidth,this.paddleHeight),this.ctx.fillStyle="red",this.ctx.fill(),this.ctx.closePath()}};var a=class{constructor(t,i){this.canvas=t,this.ctx=i,this.x=this.canvas.width/2,this.y=this.canvas.height-30,this.dx=2,this.dy=-2,this.draw=this.draw.bind(this),this.checkWallHit=this.checkWallHit.bind(this),this.interval=setInterval(this.draw,10)}checkWallHit(){this.x+this.dx>this.canvas.width||this.x+this.dx<0?this.dx=-this.dx:this.y+this.dy<0&&(this.dy=-this.dy)}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var t=new e(this.canvas,this.ctx,this.x,this.y),i=new h(this.canvas,this.ctx);t.drawBall(),i.drawPaddle(),this.checkWallHit(),this.x+=this.dx,this.y+=this.dy}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("myCanvas"),i=t.getContext("2d");new a(t,i)})}]);