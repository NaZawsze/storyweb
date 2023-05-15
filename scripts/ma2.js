// 获取弹窗
var modal2 = document.getElementById('mymodal2');

 
// 打开弹窗的按钮对象
var btn2 = document.getElementById("mybtn2");
 
// 获取 <span> 元素，用于关闭弹窗
var span2 = document.querySelector('.close2');
//获取<zhangjie>元素，用于更换html
var zhangjie =document.getElementById('zhangjie')
 
// 点击按钮打开弹窗
btn2.onclick = function() {
    modal2.style.display = "block";
}
 
// 点击 <span> (x), 关闭弹窗
span2.onclick = function() {
    modal2.style.display = "none";
    zhangjie.src="zhangjie.html";
}
 
// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        zhangjie.src="zhangjie.html";
    }
}