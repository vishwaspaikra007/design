var mainContainer = document.querySelector(".mainContainer")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")

mainContainer.onscroll = function() { parallex()};
 function parallex() {
    var scroll1 = mainContainer.scrollTop;
    var height1 = mainContainer.scrollHeight - document.documentElement.clientHeight;
    var scrolled1 = (scroll1/height1)*100;
    box1.style.marginLeft = "-" + (box1.clientWidth/100)*scrolled1 + "px";
    box2.style.marginLeft = box1.clientWidth + 2*(box2.clientWidth/100)*scrolled1 + "px";
    box1.style.transform = `rotate(${scrolled1*1.3}deg)`;
 }