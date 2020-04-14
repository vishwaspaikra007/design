let cards = document.querySelectorAll('.cards');
cards.forEach( (ele,i) => {
    let allowDrag=false;
    let offsetx = 0;
    let offsety = 0;
    
    ele.style.transform = 'translate(0,0)';
    ele.addEventListener('mousedown', (event) => {
        allowDrag = true;
        matrix = new WebKitCSSMatrix(window.getComputedStyle(ele).webkitTransform);
        ele.style.zIndex = `30`;
        console.log(matrix);
        // if(offset==0)
            offsetx = event.x ;
            offsety = event.y ;
            event.target.style.transform += ` scale(1.1)`;
            ele.style.background = `orange`;
            setTimeout(() => {
                ele.style.transition = `0s`;
              }, 400);
        // else
        //     offset = matrix.m41;

    });
    ele.addEventListener('mouseup', (event) => {
        allowDrag = false;
        ele.style.zIndex = `1`;
        event.target.style.transform = ` scale(1)`;
        ele.style.background = `none`;
        ele.style.transition = `400ms`;

    });
    ele.addEventListener('mouseout', (event) => {
        allowDrag = false;
        ele.style.zIndex = `1`;
        event.target.style.transform = ` scale(1)`;
        ele.style.background = `none`;
        ele.style.transition = `400ms`;
    });
    ele.addEventListener('mousemove', (event) => {

        if(allowDrag)
        {

            let x = ((event.x - offsetx) + event.target.parentNode.getBoundingClientRect().x + matrix.m41);
            let y = ((event.y - offsety)  + matrix.m42);
            // console.log(event.target.parentNode);

            event.target.style.transform = `translate(${x}px,${y}px) scale(1.1)`;
        }
    });
});