function init() {
    add()
    move();
}
function add() {
    var container = document.querySelector('.container');
    container.innerHTML = "";
    for (let i = 0; i < 70; i++) {
        container.innerHTML += '<div class="particles onclick="move(this)"></div>'
    }
    // var container2 = document.querySelector('.container2');
    // container2.innerHTML = "";
    // for(let i=0;i<50;i++) {
    //     container2.innerHTML += '<div class="particles onclick="move(this)"></div>'
    // }
}
function move(ths) {
    let i = 0;
    document.querySelectorAll(".particles").forEach((particle, i) => {
        setInterval(() => {
            let rand = Math.random();
            let rand0 = Math.random() * 500 - 100;
            let rand1 = Math.random() * 255 + 1;
            let rand2 = Math.random() * 255 + 1;
            let rand3 = Math.random() * 255 + 1;
            particle.style.transform = `translate(${Math.sin(0)}px, ${Math.sin(i++) * 40}px) scale(${rand * 1.1}`;

            // particle.style.background = `rgba(255,${rand2},${rand2})`;
            // particle.style.transform = `scale(${rand * 1})`;
            if (i >= 150) {
                if (i > 360)
                    i = 0;
                particle.style.background = `rgba(${rand1},${rand2},${rand3})`;
            } else if (i < 150)
                particle.style.background = `rgb(166, 255, 0)`;
        }, 200);
    });

}

window.onscroll = function() {parallex()};
function parallex() {
    //To get the scroll property
    var scroll1 = document.documentElement.scrollTop;
    var height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled1 = (scroll1/height1)*100;
    var text = document.querySelector('.container3 > span');
    text.style.opacity = (1 - scrolled1/100); 
    text.style.transform = `translate(0px , -${scrolled1*3}px) scale(${1 + scrolled1/100}) `; 
}
