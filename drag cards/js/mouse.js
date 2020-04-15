let cards = document.querySelectorAll('.cards');
let activeEle = document;

let allowDrag=false;
let offsetx = 0;
let offsety = 0;

cards.forEach( (ele,i) => {
    
    ele.addEventListener('mousedown', (event) => {
        allowDrag = true;
        activeEle = ele;
        matrix = new WebKitCSSMatrix(window.getComputedStyle(ele.parentNode).webkitTransform);
        activeEle.style.zIndex = `30`;
        
        offsetx = event.screenX ;
        offsety = event.screenY ;

        activeEle.style.background = `orange`;
        activeEle.style.transform = 'scale(1.1)';
    });
    
});

document.querySelector('body').addEventListener('mouseup', (event) => {
    if(activeEle && allowDrag)
   { 
        allowDrag = false;
        activeEle.style.transform = 'scale(1)';
        
        activeEle.style.zIndex = `1`;
        activeEle.style.background = `none`;
        setTimeout(() => {
            activeEle = null;    
        }, 100);
    }
});

document.querySelector('body').
addEventListener('mousemove', (event) => {

    if(allowDrag && activeEle)
    {

        let x = ((event.screenX - offsetx)  + matrix.m41);
        let y = ((event.screenY - offsety)  + matrix.m42);

        activeEle.parentNode.style.transform = `translate(${x}px,${y}px)`;
    }
});