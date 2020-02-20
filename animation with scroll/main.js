
scroll();
window.onscroll = function () { scroll() };

function scroll() {
    var scroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 200;
    let elements = document.querySelectorAll('.floatingElements');
    let h1 = document.querySelector('.content > h1');
    h1.style.transform = `translate(0, ${scroll - scrolled}px)`
    if(scrolled <= 28) {
        for (let i = 0; i < elements.length; i++) {
            if (i / 4 >= 0 && i / 4 < 1) {
                elements[i].style.marginTop = `calc( 40% + ${scrolled * 4}px)`;
            } else if (i / 4 >= 1) {
                elements[i].style.marginTop = `calc( 40% - ${scrolled * 2}px)`;
            }
            elements[i].style.transform = `translate(-50%, -50%) scale(${1 + scrolled / 9})`;
        }
    }
    let container = document.querySelector('.container');
    container.style.transform = `translate(0,-${scrolled}px)`
}
createElements();
function createElements() {
    let container = document.querySelector('.container');
    let element1 = `<div class="floatingElements circle"></div>`;
    let element2 = `<div class="floatingElements cube"></div>`;
    container.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        if (Math.random() < 0.5) {
            container.innerHTML += element1;
            let floatingElements = document.querySelectorAll('.floatingElements');
            floatingElements[i].style.animation = "elementAnimation 5s ease-in-out 0s infinite alternate-reverse";
        }
        else {
            container.innerHTML += element2;
            let floatingElements = document.querySelectorAll('.floatingElements');
            floatingElements[i].style.animation = "elementAnimation1 7s ease-in-out 0s infinite";
        }

    }
}