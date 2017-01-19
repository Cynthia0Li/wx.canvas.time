//canvas.js

var digit=[
    [
        [0,0,1,1,1,0,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,0,1,1,0],
        [0,0,1,1,1,0,0]
    ],//0
    [   
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [1,1,1,1,1,1,1]
    ],//1
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,1,1],
        [1,1,1,1,1,1,1]
    ],//2
    [
        [0,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//3
    [
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,0],
        [0,0,1,1,1,1,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,1,1,0],
        [1,1,1,1,1,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,1]
    ],//4
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
    ],//5
    [
        [0,0,0,0,1,1,1],        
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//6
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0]
    ],//7
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//8
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [1,1,0,0,0,0,0]
    ],//9
    [
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
    ],//:
]

var r = 2
var d 
var hours 
var minutes 
var seconds 
var balls = []

var colors = ['purple', 'red', 'yellow', 'blue', 'green', 'orange', 'gray','aqua']
function render(ctx){
    //console.log(ctx)
    d = new Date()
    hours = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    renderDigit(0,0,parseInt(hours/10),ctx)
    renderDigit(15*(r+1),0,parseInt(hours%10),ctx)
    renderDigit(30*(r+1),0,10,ctx)
    renderDigit(39*(r+1),0,parseInt(minutes/10),ctx)
    renderDigit(54*(r+1),0,parseInt(minutes%10),ctx)
    renderDigit(69*(r+1),0,10,ctx)
    renderDigit(78*(r+1),0,parseInt(seconds/10),ctx)
    renderDigit(93*(r+1),0,parseInt(seconds%10),ctx)
    updateBalls()
    for(var i = 0; i<balls.length; i++){
        ctx.setFillStyle(balls[i].ballcolor)
        ctx.beginPath()
        ctx.arc(balls[i].ballx, balls[i].bally, r, 0,2*Math.PI)
        ctx.fill()
    }
    ctx.draw()
}


function renderDigit(x,y,num,ctx){
    ctx.setFillStyle('darkblue')
    for(var i=0; i<digit[num].length;i++){
        for(var j=0; j<digit[num][i].length;j++){
            //console.log(digit[num][i][j])
            if(digit[num][i][j]==1){               
                ctx.beginPath()
                ctx.arc(x+j*2*(r+1)+(r+1), y+i*2*(r+1)+(r+1),r,0,2*Math.PI)
                ctx.fill()                
            }
                
        }
    }
    
    //console.log(count)
}

function addBalls(x,y,num){
    //console.log(num)
    for(var i=0; i<digit[num].length;i++){
        for(var j=0; j<digit[num][i].length;j++){
            //console.log(digit[num][i][j])
            if(digit[num][i][j]==1){               
                var aBall = {
                    ballx: x+j*2*(r+1)+(r+1),
                    bally: y+i*2*(r+1)+(r+1),
                    ballcolor: colors[Math.round(Math.random()*8)],
                    vx: -Math.round(Math.random()*3),
                    vy: 2,
                    vax: 0,
                    vay: Math.floor(Math.random()*9)
                } 
                balls.push(aBall)
                //console.log(aBall)              
            }
        }
    }
    //console.log(balls) 
}

function updateBalls(){
    for(var i=0; i<balls.length; i++){
        //console.log(balls[i].vx)
        balls[i].vx = balls[i].vx + balls[i].vax
        balls[i].ballx = balls[i].ballx+balls[i].vx
        balls[i].vy = balls[i].vy + balls[i].vay
        balls[i].bally = balls[i].bally+balls[i].vy
        //console.log(balls[i].bally)
        if(balls[i].bally>200){
            balls[i].vy = -balls[i].vy*0.5
        }
    }
    for(var i=0; i<balls.length; i++){
        if(balls[i].ballx>300||balls[i].ballx<0||balls[i].bally>210||balls[i].bally<0){
            balls.splice(i,1)
        }
    }
}

function update(){ //根据时间更新balls
    var cur = new Date()
    var curhours = cur.getHours()
    var curminutes = cur.getMinutes()
    var curseconds = cur.getSeconds()
    if(parseInt(hours/10)!=parseInt(curhours/10)){
        addBalls(0,0,Math.round(hours/10))
        //console.log(hours/10)
    }
    if(parseInt(hours%10)!=parseInt(curhours%10)){
        addBalls(15*(r+1),0,Math.round(hours%10))
        //console.log(curhours%10)
    }
    if(parseInt(minutes/10)!=parseInt(curminutes/10)){
        addBalls(39*(r+1),0,Math.round(minutes/10))
        //console.log(curminutes/10)
    }
    if(parseInt(minutes%10)!=parseInt(curminutes%10)){
        addBalls(54*(r+1),0,Math.round(minutes%10))
        //console.log(curminutes%10)
    }
    if(parseInt(seconds/10)!=parseInt(curseconds/10)){
        addBalls(78*(r+1),0,Math.round(curseconds/10))
        //console.log(Math.round(curseconds/10) )
    }
    if(parseInt(seconds%10)!=parseInt(curseconds%10)){
        addBalls(93*(r+1),0,Math.round(curseconds%10))
        //console.log(curseconds%10)
    }
}

var app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    const ctx = wx.createCanvasContext('myCanvas')
    render(ctx)
    //console.log(ctx.height)
    setInterval(function(){        
        update()
        render(ctx)
    },50)
    //调用应用实例的方法获取全局数据
   
  }
})
