var all = document.getElementsByTagName('*');
console.log(all);
var body = document.getElementsByTagName('body');
console.log(body);
var section = document.getElementsByTagName('section');
console.log(section);
console.log(document.getElementById('aaa'));


var article = document.getElementById('article');
console.log(article);
console.log(article.tagName.toLowerCase());
console.log(article.style);
console.log(article.style.color);
console.log(article.nodeName.toLowerCase());
console.log(article.nodeType);
article.setAttribute('class','cla');
article.removeAttribute('class');
console.log(article.getAttribute('id'));

var nodes = article.childNodes
console.log(nodes);
for(var i = 0;i < nodes.length;i++){
    if(nodes[i].nodeType == 1){
        console.log(nodes[i].nodeName.toLowerCase());
    }else if(nodes[i].nodeType == 3){
        console.log(nodes[i].nodeValue);
    }
}
console.log(article.firstChild);
console.log(article.lastChild);

console.log(article.parentNode);
console.log(article.previousSibling);
console.log(article.nextSibling);

var sec = document.getElementsByName('sec');
console.log(sec);

var html = document.documentElement;
console.log(html);
console.log(document.body);

var button = document.getElementsByTagName('button')[0];
console.log(button);
button.onclick = function(){
    console.log("button.onclick");
}
button.onmousedown = function(){
    console.log("button.onmousedown");
}
button.onmouseup = function(){
    console.log("button.onmouseup");
}
button.onmouseover = function(evt){
    console.log("button.onmouseover");
    console.log(evt.relatedTarget);
}
button.onmouseout = function(evt){
    console.log("button.onmouseout");
    console.log(evt.relatedTarget);
}
button.onmousemove = function(){
    console.log("button.onmousemove");
}
button.ondblclick = function(){
    console.log("button.ondblclick");
}

var input = document.getElementsByTagName('input')[0];
console.log(input);
input.onkeydown = function(evt){
    console.log("input.onkeydown");
    console.log(evt.keyCode);
}
input.onkeyup = function(){
    console.log("input.onkeyup");
}
input.onkeypress = function(){
    console.log("input.onkeypress");
}
input.onselect = function(){
    console.log("input.onselect");
}
input.onchange = function(){
    console.log("input.onchange");
}
input.onfocus = function(){
    console.log("input.onfocus");
}
input.onblur = function(){
    console.log("input.onblur");
}

window.onload = function(evt){
    console.log('window.onload');
    console.log(arguments[0]);//隐藏参数，即Event对象
    console.log(evt);//同上
}
window.addEventListener('load',function(){
    console.log('window.addEventListener.load');
},false);
window.addEventListener('beforeunload',function(){
    alert("666");
},false);

window.onresize = function(){
    console.log('window.onresize');
}

//事件冒泡
html.onclick = function(){
    console.log("document.onclick");
}
document.body.onclick = function(){
    console.log("body.onclick");
}
article.onclick = function(){
    console.log("article.onclick");
}
input.onclick = function(){
    console.log("input.onclick");
}

var link = document.getElementsByTagName('a')[0];
console.log(link);
link.addEventListener('click',function(e){
    e.preventDefault();//阻止默认事件
    console.log("link.addEventListener");
},false);