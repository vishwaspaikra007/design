var mainContainer = document.querySelector(".mainContainer")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var body = document.querySelector("body")
var meLooking = document.querySelector(".meLooking")
var dialogue1 = document.querySelector(".dialogue1")
var dialogueAnimator = document.querySelectorAll(".dialogueAnimator")
var containerForBox = document.querySelector(".containerForBox");
var dialogue1Menu = document.querySelector(".dialogue1Menu");
var buildings = document.querySelector(".buildings");
var contentSubDialogue2 = document.querySelector("#contentSubDialogue2 > span");
var contentDialogue1 = document.querySelector("#contentDialogue1");
var areyoureadyContainer = document.querySelector(".areyoureadyContainer");
var dialogueContainer = document.querySelector(".dialogueContainer");
var contentMainContainer = document.querySelector(".contentMainContainer");

dialogue1.addEventListener("mouseover",(e)=> { mouseoverDialogue1() });
var storeWidthDialogue1, storeMarginTopDialogue1;
window.onload =()=> {
    storeWidthDialogue1 = areyoureadyContainer.clientWidth;
    storeMarginTopDialogue1 = 
        "calc(" + dialogue1.clientHeight/2 + "px - " + areyoureadyContainer.clientHeight + "px)";
    areyoureadyContainer.style.marginTop = storeMarginTopDialogue1;
}
window.onresize =()=> {
    setTimeout(() => {
        storeWidthDialogue1 = areyoureadyContainer.clientWidth;
        storeMarginTopDialogue1 = 
            "calc(" + dialogue1.clientHeight/2 + "px - " + areyoureadyContainer.clientHeight + "px)";
        areyoureadyContainer.style.marginTop = storeMarginTopDialogue1;
    
        if(dialogue1.style.width == "100vw") {
            dialogue1Function();
        } else {
            dialogue1MenuFunction();
        }
    }, 800);
    
}
var mouseoverDialogue1 = ()=> {
    // replacement of mouse over
    meLooking.style.filter = "blur(11px)";

    dialogue1.style.filter = "blur(0.5px)";
    dialogue1.style.outlineOffset = "-40px";
    if( dialogue1.style.width == '50vw' || dialogue1.style.width == '')
        dialogue1.style.cursor = "zoom-in";
    else
        dialogue1.style.cursor = "default";

    buildings.style.filter = "blur(8px)";

    dialogueAnimator[0].style.width = "100%";
    dialogueAnimator[1].style.width = "100%";
    // end of replacement of mouse over
}
dialogue1.addEventListener("mouseout",(e)=> { mouseoutDialogue1() });

var mouseoutDialogue1 = ()=> {
    if( dialogue1.style.width == '100%' && dialogue1.clientWidth > 800)
        return;
    meLooking.style.filter = "blur(0px)";

    dialogue1.style.filter = "blur(11px)";
    dialogue1.style.outlineOffset = "0px";

    dialogueAnimator[0].style.width = "200%";
    dialogueAnimator[1].style.width = "200%";

    buildings.style.filter = "blur(30px)";
}

dialogue1.addEventListener('click',e => { dialogue1Function() })
dialogue1Function = ()=> {
    dialogue1.style.width = '100%';
    dialogue1.style.height = '100vh';
    dialogue1.style.top = '0px';
    dialogue1.style.left = '0px';
    dialogue1.style.zIndex = '3';
    dialogue1.style.cursor = "default";

    areyoureadyContainer.style.marginTop = '0px';
    areyoureadyContainer.style.width = storeWidthDialogue1 + "px";

    contentSubDialogue2.innerHTML = "Scroll to know about me";

    mainContainer.style.display = 'none';

    dialogue1Menu.style.display = 'block';

    contentMainContainer.style.height = "calc(100% - 56px)";
}
dialogue1Menu.addEventListener('click',e => { dialogue1MenuFunction() })
dialogue1MenuFunction =()=> {
    if( dialogue1.clientWidth > 800 ) {
        dialogue1.style.width = '50vw';
        dialogue1.style.top = '25vh';
        dialogue1.style.left = '35vw';
    } else {
        dialogue1.style.width = '100%';
        dialogue1.style.top = '0';
        dialogue1.style.left = '0';
    }
    dialogue1.style.height = '50vh';
    dialogue1.style.zIndex = '1'; 

    areyoureadyContainer.style.marginTop = storeMarginTopDialogue1;

    dialogue1Menu.style.display = 'none';

    contentSubDialogue2.innerHTML = "Click to know more";

    mainContainer.style.display = 'block';

    contentMainContainer.style.height = "0px";
}
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
