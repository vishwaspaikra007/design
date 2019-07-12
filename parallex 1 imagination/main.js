var mainContainer = document.querySelector(".mainContainer")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var body = document.querySelector("body")
var meLooking = document.querySelector(".meLooking")
var dialogue1 = document.querySelector(".dialogue1")
var dialogueAnimator = document.querySelectorAll(".dialogueAnimator")
var dialogue1 = document.querySelector(".dialogue1")
var containerForBox = document.querySelector(".containerForBox")

dialogue1.addEventListener("mouseover",(e)=> {
    meLooking.style.filter = "blur(11px)";

    dialogue1.style.filter = "blur(0.5px)";
    dialogue1.style.outlineOffset = "-40px";

    dialogueAnimator[0].style.height = "0";
    dialogueAnimator[1].style.height = "0";
});
dialogue1.addEventListener("mouseout",(e)=> {
    meLooking.style.filter = "blur(0px)";

    dialogue1.style.filter = "blur(11px)";
    dialogue1.style.outlineOffset = "0px";

    dialogueAnimator[0].style.height = "100%";
    dialogueAnimator[1].style.height = "100%";
});

mainContainer.onscroll = function() { parallex()};
 function parallex() {
    var scroll1 = mainContainer.scrollTop;
    var height1 = mainContainer.scrollHeight - document.documentElement.clientHeight;
    var scrolled1 = (scroll1/height1)*100;
    box2.style.marginLeft = box1.clientWidth + (box2.clientWidth/100)*scrolled1 + "px";
    body.style.background = 'black';

    console.log(scrolled1);
    if(scrolled1 > 98.6) {
        meLooking.classList.add("slideImageAnimator");
    } 
    if(scrolled1 > 68.6) {
        body.style.backgroundColor = 'darkcyan';

        meLooking.style.transition = "1s";
        meLooking.style.bottom = "0vh";
        meLooking.style.transform = `rotateX(0deg)`;

        dialogue1.style.opacity = "1";
    } else {
        meLooking.classList.remove("slideImageAnimator");

        meLooking.style.transition = "400ms";
        meLooking.style.left = "10vw";
        meLooking.style.transform = `rotateX(90deg)`;

        dialogue1.style.opacity = "0";
    }
    if(scrolled1 > 80)
    {
        containerForBox.style.zIndex = "0";
    } else {
        containerForBox.style.zIndex = "3";
    }
    box1.style.transition = '0s';
    box1.style.marginLeft = "-" + (box1.clientWidth/100)*scrolled1 + "px";

 }