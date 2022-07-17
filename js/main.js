var inputEle =document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEl = document.getElementById("msg");


buttonEle.onclick = function() {
   var inputValue = inputEle.value;
   msgEl.innerHTML = inputValue
   inputEle.value = ""
}