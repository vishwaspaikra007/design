var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;
var forRow = '49.95% 0.1% 49.95%';
var forColumn = '49.95% 0.1% 49.95%';

var container = document.querySelector('.container');
var dragItem = document.querySelector('#box2');

container.addEventListener('touchstart', dragStart, false);
container.addEventListener('touchend', dragEnd, false);
container.addEventListener('touchmove', drag, false);

container.addEventListener('mousedown', dragStart, false);
container.addEventListener('mouseup', dragEnd, false);
container.addEventListener('mousemove', drag, false);

function dragStart(e) {
    if(e.type === 'touchstart') {
        initialX = e.touches[0].clientX -xOffset;
        initialY = e.touches[0].clientY -yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if(e.target === dragItem)
        active = true;
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    active = false;
}

function drag(e) {
    if(active) {

        e.preventDefault();
        if(e.type === 'touchmove') {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        console.log(e.clientX);
        if(container.clientWidth < 800) {
            forRow = ((e.clientY/container.clientHeight)*100 - 0.05)
            + '%' + '0.1%' + (((container.clientHeight - e.clientY)/container.clientHeight)*100 - 0.05) + '%';
            container.style.gridTemplateRows = forRow;
            container.style.gridTemplateColumns = 'none';
        }
        else {
            forColumn = ((e.clientX/container.clientWidth)*100 - 0.05)
            + '%' + '0.1%' + (((container.clientWidth - e.clientX)/container.clientWidth)*100 - 0.05) + '%';
            container.style.gridTemplateColumns = forColumn;
            container.style.gridTemplateRows = 'none';
        }
    }
}
window.onresize = () => {
    if(container.clientWidth < 800) {
    console.log('change to row');
        container.style.gridTemplateRows = forRow;
        container.style.gridTemplateColumns = 'none';
    }
    else {
    console.log('change to column');
        container.style.gridTemplateColumns = forColumn;
        container.style.gridTemplateRows = 'none';
    }
}

window.onload = ()=> {
    if(container.clientWidth < 800) {
        container.style.gridTemplateRows = forRow;
        container.style.gridTemplateColumns = 'none';
        }
    else {
        container.style.gridTemplateColumns = forColumn;
        container.style.gridTemplateRows = 'none';
    }
}