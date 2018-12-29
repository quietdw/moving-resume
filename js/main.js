var cssResource1 = `
/*
    今天要做一个会动的简历
    首先给所有动作都加上动画
*/
* {
    transition: all 0.3s;
}
/*
    喜欢黑色的背景
*/
* {
    background: #000;
    color: #FFF;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#resumeBox {
    overflow: hidden;
    height: 100vh;
}
#codePreLeft {
    overflow: auto;
    height: 100vh;
}
/*
    再给代码个颜色
*/
.token.comment{
    color: slategray;
}
.token.selector{
    color: #690;
}
.token.punctuation{
    color: #999;
}
.token.property{
    color: #095;
}
.token.function{
    color: #DD4A68;
}
.token atrule,.token.atrule{
    color: #07a;
}
/*
    好的，上色完毕！
    再稍微变个形状，矩形太单调了
*/
#resumeBox {
    min-width: 980px;
    perspective: 1000px;
    display: flex;
    align-content: space-between;
    position: relative;
}
#codePreLeft {
    width: 45%;
    background: #000;
    padding:10px;
    transform-origin: left;
    transform: translateX(5%) rotateY(25deg);
    border-top:15px solid #FFF;
    border-left:1px solid #FFF;
    border-bottom:1px solid #FFF;
    border-right:1px solid #FFF;
    position: relative;
}

@keyframes paperShow{
    0%{transform:translateX(100%)}
    100%{transform:translateX(5%)}
}
/*
现在我们需要一个文本框，写我的简历。
*/
#paperPreRight {
    width: 50%;
    height: 100vh;
    padding:0 40px;
    animation: paperShow 0.6s;
    transform:translateX(5%);
    align-items: center;
    display:flex;
}

#paperPreRight pre {
    width: 100%;
    height: 82vh;
    padding:10px;
    background: black;
    border-top:15px solid #FFF;
    border-left:1px solid #FFF;
    border-bottom:1px solid #FFF;
    border-right:1px solid #FFF;
    overflow: auto;
}
#codePreLeft:hover,#paperPreRight pre:hover{
    box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
}

/*
    文本框准备好了
    开始往里面填写内容了
*/
`

var cssResource2 = `
/*
    忘记了这是Markdown格式的内容了
    给它加点Markdown的效果吧~
*/ 
`

var htmlResource = `
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
### 大家好，我四渣渣辉！是兄弟就来啃我。
[Github](https://github.com/quietdw/moving-resume)
`

var codePre = document.createElement('pre')
codePre.id = 'codePreLeft'
resumeBox.appendChild(codePre)

var paperPreContainer = document.createElement('div')
var paperPre = document.createElement('pre')
paperPreContainer.id = 'paperPreRight'
paperPreContainer.appendChild(paperPre)

writecode('', cssResource1, () => {
    writeMarkDown(() => {
        writecode(cssResource1, cssResource2, () => {

            resumeBox.appendChild(paperPreContainer)
            var n = 0
            var timer2 = setInterval(() => {
                n = n + 1
                var resultR = htmlResource.slice(0, n)
                paperPre.innerHTML = marked(resultR)
                paperPre.scrollTop = 10000
                if (n === htmlResource.length) {
                    window.clearInterval(timer2)
                    fn.call()
                }
            }, 5)
        })
    })
})

// var html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
function writecode(prefix, code, fn) {

    prefix = prefix || ''
    var n = 0
    var timer = setInterval(() => {
        n += 1
        var resultL = prefix + code.slice(0, n)
        codePre.innerHTML = Prism.highlight(resultL, Prism.languages.css, 'css');
        codePre.scrollTop = 10000
        main.innerHTML = resultL
        if (n === code.length) {
            window.clearInterval(timer)
            fn.call()
        }
    }, 5)
}

function writeMarkDown(fn) {
    resumeBox.appendChild(paperPreContainer)
    var n = 0
    var timer2 = setInterval(() => {
        n = n + 1
        var resultR = htmlResource.slice(0, n)
        paperPre.innerHTML = resultR
        paperPre.scrollTop = 10000
        if (n === htmlResource.length) {
            window.clearInterval(timer2)
            fn.call()
        }
    }, 5)
}


// function fn1(){
//     resumeBox.appendChild(codePre)
//     var n=0
//     var timer = setInterval(()=>{
//         n+=1
//         var resultL = cssResource.slice(0,n)
//         codePre.innerHTML = resultL
//         codePre.scrollTop = 10000
//         main.innerHTML=resultL
//         if(n===cssResource.length){
//             window.clearInterval(timer)
//                 fn2()
//         }
//     },0)
// }

// function fn2(){
//     resumeBox.appendChild(paperPreContainer)
//     var n=0
//     var timer2 = setInterval(()=>{
//         n=n+1
//         var resultR = htmlResource.slice(0,n)
//         paperPre.innerHTML = resultR
//         paperPre.scrollTop = 10000
//         if(n===htmlResource.length){
//             window.clearInterval(timer2)
//         }
//    },0)
// }