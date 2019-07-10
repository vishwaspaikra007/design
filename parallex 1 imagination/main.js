var mainContainer = document.querySelector(".mainContainer")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var body = document.querySelector("body")
var meLooking = document.querySelector(".meLooking")

mainContainer.onscroll = function() { parallex()};
 function parallex() {
    var scroll1 = mainContainer.scrollTop;
    var height1 = mainContainer.scrollHeight - document.documentElement.clientHeight;
    var scrolled1 = (scroll1/height1)*100;
    box2.style.marginLeft = box1.clientWidth + (box2.clientWidth/100)*scrolled1 + "px";
    body.style.background = 'yellow';

    console.log(scrolled1);
    if(scrolled1 > 68.6) {
        meLooking.style.transition = "1s";
        body.style.backgroundColor = 'darkcyan';
        meLooking.style.bottom = "0vh";
        meLooking.style.transform = `rotateX(0deg)`;
    } else {
        meLooking.style.transition = "400ms";
        meLooking.style.transform = `rotateX(90deg)`;
    }
    if(scrolled1 < 40)
    {
        box1.style.transition = '0s';
        box1.style.marginLeft = "-" + (box1.clientWidth/100)*scrolled1 + "px";
        box1.style.backgroundImage = 'radial-gradient(white 31%,white 21%,white 37%,black 39%,yellow 33%, yellow 33%)';
    } else {
        box1.style.marginLeft = '-25%';
        box1.style.transition = '1s';
        box2.style.marginLeft = '100%';
        box1.style.backgroundImage = 'radial-gradient(transparent 31%,transparent 21%,transparent 37%,black 39%,transparent 33%, transparent 33%)';
    }
 }