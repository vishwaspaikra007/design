let cards = document.querySelectorAll('.cards');
let activeEle = document;

let allowDrag=false;
let offsetx = 0;
let offsety = 0;
let initialX, initialY;
let Activendex, matrix;
cards.forEach( (ele,i) => {
    
    ele.addEventListener('mousedown', (event) => {
        event.preventDefault();
        allowDrag = true;
        activeEle = ele;
        matrix = new WebKitCSSMatrix(window.getComputedStyle(ele.parentNode).webkitTransform);
        activeEle.style.zIndex = `30`;
        
        offsetx = event.x ;
        offsety = event.y ;

        Activendex = i;
        let wraper = document.querySelectorAll('.wraper');
        wp[Activendex].initialX = wraper[Activendex].getBoundingClientRect().x;
        wp[Activendex].initialY = wraper[Activendex].getBoundingClientRect().y;
        initialX = wp[i].initialX;
        initialY = wp[i].initialY;
   
        activeEle.parentNode.style.zIndex = `20`;
        activeEle.style.background = `orange`;
        activeEle.style.transform = 'scale(1.1)';
    });
    
});

document.querySelector('body').addEventListener('mouseup', (event) => {
    if(activeEle && allowDrag)
   { 

    activeEle.parentNode.style.transition = "1000ms";
    let matrixm = new WebKitCSSMatrix(window.getComputedStyle(activeEle.parentNode).webkitTransform);
        
        for(let i in area)
        {
            if(event.x > area[i].x && event.x < area[i].x + area[i].width && event.y > area[i].y && event.y < area[i].y + area[i].height)
            {
                if(i != Activendex) 
                {
                    console.log(i,Activendex);
                    let x = (wp[i].initialX - wp[Activendex].offsetX);
                    let y = (wp[i].initialY - wp[Activendex].offsetY);
                    activeEle.parentNode.style.transform = `translate(${x}px,${y}px)`;
                    console.log(x,y)
                //   let  matrixA = new WebKitCSSMatrix(window.getComputedStyle(wraper[i]).webkitTransform);
    
                   x = (wp[Activendex].initialX - wp[i].offsetX) ;
                   y = (wp[Activendex].initialY - wp[i].offsetY) ;
                    console.log("jk")
                    console.log(initialY)
                    wp[i].ele.style.transform = `translate(${x}px,${y}px)`;
    
                    console.log(i)
    
    
                        let temp = {
                            x: wp[i].initialX,
                            y: wp[i].initialY,
                            ax: area[i].x,
                            ay: area[i].y
                        }
    
                        wp[i].initialY = wp[Activendex].initialY;
                        wp[i].initialX = wp[Activendex].initialX;
                        
                        area[i].x = area[Activendex].x;
                        area[i].y = area[Activendex].y;
    
                        wp[Activendex].initialX = temp.x;
                        wp[Activendex].initialY = temp.y;
    
                        area[Activendex].x = temp.ax;
                        area[Activendex].y = temp.ay;
                }
                else {
                    let wraper = document.querySelectorAll('.wraper');
                    wp[i].initialY = wraper[i].getBoundingClientRect().y;
                    wp[i].initialX = wraper[i].getBoundingClientRect().x;
                }
                
                
            } 
           
        }
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
        activeEle.parentNode.style.transition = "0ms";
        let x = ((event.x - offsetx)  + matrix.m41);
        let y = ((event.y - offsety)  + matrix.m42);

        activeEle.parentNode.style.transform = `translate(${x}px,${y}px)`;
    }
});
let cp,ccp,area = {},wp;
function getContainerDimensions() {

    let container = document.querySelector('.mainContainer');
    let containerProperty = {
        height: container.getBoundingClientRect().height,
        width: container.getBoundingClientRect().width,
        x: container.getBoundingClientRect().x,
        y: container.getBoundingClientRect().y
    }
    cp = containerProperty;

    let cardsContainer = document.querySelectorAll('.cardsContainer');
    let cardsContainerProperty = {
        height: cardsContainer[0].getBoundingClientRect().height,
        width: cardsContainer[0].getBoundingClientRect().width,
        total: cardsContainer.length
    }
    ccp = cardsContainerProperty;
    containerProperty.rows = Math.floor(cp.height / ccp.height);
    containerProperty.columns = Math.floor(cp.width / ccp.width);

    cardsContainer.forEach((ele, i)=> {
        area[`${i}`] = {
            ele: ele,
            x: ele.getBoundingClientRect().x,
            y: ele.getBoundingClientRect().y,
            width: ele.getBoundingClientRect().width,
            height: ele.getBoundingClientRect().height
        }
    })
    let wrapper = document.querySelectorAll('.wraper');
    let wrapperProperty = {};
    wrapper.forEach( (ele, i) => {
        let obj = {}
        obj.ele = ele;
        obj.i = i;
        obj.initialX = ele.getBoundingClientRect().x;
        obj.initialY = ele.getBoundingClientRect().y;
        obj.offsetX = obj.initialX;
        obj.offsetY = obj.initialY;
        wrapperProperty[i] = obj;
    })
    wp = wrapperProperty;
    console.log(cp)
    console.log(wp)
}
getContainerDimensions();