var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

var container = document.querySelector('.container');
var dragItem = document.querySelector('#box2');

container.addEventListener('mousedown', dragStart, false);
container.addEventListener('mouseup', dragEnd, false);
container.addEventListener('mousemove', drag, false);

function dragStart(e) {
    initialX = e.clientX - xOffset;

    if(e.target === dragItem)
        active = true;
}

function dragEnd(e) {
    initialX = currentX;

    active = false;
}

function drag(e) {
    if(active) {

        e.preventDefault();

        currentX = e.clientX - initialX;

        xOffset = currentX;

        //setTranslate(currentX ,dragItem);

        console.log(e.clientX);
        container.style.gridTemplateColumns = ((e.clientX/container.clientWidth)*100 - 0.05)
                    + '%' + '0.1%' + (((container.clientWidth - e.clientX)/container.clientWidth)*100 - 0.05) + '%';
    }
}

function setTranslate(xPos,el) {
    el.style.transform = `translate(${xPos}px)`;
}