let html = document.getElementById('demo')
let style = document.getElementById('style')
let string =
`/*你好，我是一名前端新人
接下来我要搞个
八卦图出来啦
首先，我需要准备一个div*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*接下来我把 div 变成一个八卦图
注意看好了
首先，把 div 变成一个圆*/
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳形成的
一黑一白*/
#div1{
  background: linear-gradient(90deg,rgba(255,255,255,1)
      0%,rgba(255,255,255,1) 50%,
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球*/
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(255,255,255,1) 0%,
  rgba(255,255,255,1) 25%,
  rgba(0,0,0,1) 25%,
  rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff; 
  border-radius: 50%;
  background: radial-gradient(circle,rgba(0,0,0,1) 0%,
  rgba(0,0,0,1) 25%,
  rgba(255,255,255,1) 25%,
  rgba(255,255,255,1) 100%);
}
`
// string=string.replace(/\n/g,"<br>")
let n = -1
// demo.innerHTML = string.substring(0,n)//这个传入两个参数，从哪里到哪里显示
let string2 = ""
let step = () => {
  setTimeout(() => {
    n += 1
    if (string[n]==='\n') {
      string2 += '<br>'
    } else if(string[n]===' '){
      string2 += '&nbsp'
    } else {
      string2 += string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    if (n<string.length-1) {
      step()
    }else{}
  }, 10);
}
step()
//上面这种写法的好处是可以随时停止，一般都不用setInterval

// setInterval(() => {
//   n+=1
//   demo.innerHTML=n
// }, 3000);