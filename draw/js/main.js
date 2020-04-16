function createCells(size) {
    let mainCont = document.querySelector('.mainContainer');
    mainCont.style.gridTemplateColumns = `repeat(${size},1fr)`
    for(let i=0;i<size*size;i++)
    {
        let cell = document.createElement('div');
        cell.classList.add('cells');
        mainCont.append(cell);
    }

}

cellsInARow = 30
createCells(cellsInARow);

let allCells = {};
let cells = document.querySelectorAll('.cells')
    
for(let i=0,j=0;i<cells.length;i++)
{
    if(i%cellsInARow==0 && i>=30)
        j++;
    let x = (i%cellsInARow)*cells[0].clientWidth;
    let y = (j)*cells[0].clientHeight;
    allCells[`${x}${y}`]=cells[i];
}

console.log(allCells)

let mainCont = document.querySelector('.mainContainer');
let allowDraw = false;
mainCont.addEventListener('mousedown', e => {
    allowDraw = true;
})
mainCont.addEventListener('mouseup', e => {
    allowDraw = false;
})
mainCont.addEventListener('mousemove', event => {
    if(allowDraw) {
        let x = Math.floor(event.x - mainCont.getBoundingClientRect().x);
        let y = Math.floor(event.y - mainCont.getBoundingClientRect().y);
        console.log(x + " " + y)
    
        let cells = document.querySelector('.cells')
    
        x = Math.floor(x - Math.floor(x%cells.clientWidth));
        y = Math.floor(y - Math.floor(y%cells.clientHeight));
        console.log(x + " " + y)
    
        allCells[`${x}${y}`].style.backgroundColor = "green";    
    }
})

mainCont.addEventListener('touchmove', event => {
    console.clear();
    console.log(event.touches['0'].clientX)
    let x = Math.floor(event.touches['0'].clientX - mainCont.getBoundingClientRect().x);
    let y = Math.floor(event.touches['0'].clientY - mainCont.getBoundingClientRect().y);
    console.log(x + " " + y)

    let cells = document.querySelector('.cells')
    // x = Math.floor(x);
    // y = Math.floor(y);
    x = Math.floor(x - Math.floor(x%cells.clientWidth));
    y = Math.floor(y - Math.floor(y%cells.clientHeight));
    console.log(x + " " + y)

    // if()
    allCells[`${x}${y}`].style.backgroundColor = "green";

})