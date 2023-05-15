var shang = document.getElementById('shang');
var fan = document.getElementById('fan');
var xia = document.getElementById('xia');
var path = window.location.pathname;
var filenameWithExtension = path.substring(path.lastIndexOf('/') + 1);
var filename = filenameWithExtension.split('.')[0];
var num1 = filename.match(/\d$/);
shang.onclick = function() {
    var number = parseInt(num1[0]) - 1;
    shang.href="daogui"+(number)+".html";
}
xia.onclick = function() {
    var number2 = parseInt(num1[0]) + 1; 
    xia.href="daogui"+(number2)+".html";
}