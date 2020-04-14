randomColor();
var randomBoxes = document.querySelectorAll('.randomBoxes');
var j = randomBoxes.length;
function randomColor() {
    var randomBoxes = document.querySelectorAll('.randomBoxes');
    if(--j < 0)
        j=randomBoxes.length;
    for(let i=0; i< randomBoxes.length; i++) {
        let bgColor = `rgba(${255/Math.abs((j - i) + 1) + 150}, 50, 50, 0.8)`
        randomBoxes[i].style.backgroundColor = bgColor; 
    }
}
setInterval(() => {
    randomColor();
}, 100);
// var container = document.querySelector('.container');
// container.onscroll = call();
// container.addEventListener('scroll', call);
// call function will be used as callback function
// so use call instead of call()
// setInterval(() => {
//     call();
// }, 16.66);
var start = null;
function call(timestamp) {
if(!start || progress > 400)
    start = timestamp;
progress = (timestamp - start) / 10;
window.requestAnimationFrame(call);
// console.log(progress + " " + start);
var randomBoxes = document.querySelectorAll('.randomBoxes');
var container = document.querySelector('.container');
let containerHeight = container.clientHeight;
for(let i = 0; i < randomBoxes.length; i++) {
    if(randomBoxes[i].getBoundingClientRect().y < 100 && randomBoxes[i].getBoundingClientRect().y > -100) {
        randomBoxes[i].style.transform = `perspective(400px) rotateX(${50 - randomBoxes[i].getBoundingClientRect().y/2}deg) scale(${1-(100 - randomBoxes[i].getBoundingClientRect().y)/600})translate(0,${Math.abs(100 - randomBoxes[i].getBoundingClientRect().y)*1.2}px)`;
        // console.log(`-${Math.abs(100 - Math.abs(randomBoxes[i].getBoundingClientRect().y))}px`)
    } else if(randomBoxes[i].getBoundingClientRect().y > 0 && randomBoxes[i].getBoundingClientRect().y < containerHeight/4) {
        randomBoxes[i].style.transform = `perspective(0px) rotateX(0deg) scale(1) translate(1)`;
    }
    else if(randomBoxes[i].getBoundingClientRect().y < (containerHeight - 138) && randomBoxes[i].getBoundingClientRect().y > containerHeight*3/4){
    randomBoxes[i].style.transform = `perspective(0px) rotateX(0deg) scale(1)`;

    }
    else if (randomBoxes[i].getBoundingClientRect().y > (containerHeight - 138) && randomBoxes[i].getBoundingClientRect().y < (containerHeight + 100)) {
        randomBoxes[i].style.transform = `perspective(400px) rotateX(${((containerHeight - 138) - randomBoxes[i].getBoundingClientRect().y)/2}deg) scale(${1+((containerHeight - 188) - randomBoxes[i].getBoundingClientRect().y)/900})`;
    }
     else {
    randomBoxes[i].style.transform = `perspective(0px) rotateX(0deg) scale(1) translate(0, 0)`;

    }
    
}
}

window.requestAnimationFrame(call);