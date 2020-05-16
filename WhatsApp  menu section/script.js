let currentPos
let marginTop=0;
let y
let status;
var isScrolling
document.addEventListener('scroll', e => {

    clearTimeout(isScrolling)
    let header = document.querySelector('.header')
    header.style.transition = "500ms, margin-top 0s"
    y = document.documentElement.scrollTop
    console.log(y)
    if(!currentPos)
        currentPos=y
    if(currentPos>y)
        status="up"
    else
        status="down"

    marginTop += currentPos - y

    if(marginTop>=40)
        headerHalf()
    else if(marginTop<=-100)
        headerFull()  

    isScrolling = setTimeout(() => {
        // alert(status)
        if(status=="up")
            headerHalf()
        else
            headerFull()
        header.style.transition = "500ms"
        header.style.marginTop = marginTop + "px"
    }, 500,status);

    console.log(marginTop)
    header.style.marginTop = marginTop + "px"
    currentPos=y


})

function headerHalf() {
    let header = document.querySelector('.header')
    header.style.width = "90%"
    header.style.marginLeft = "5%"
    header.style.paddingTop = "0px"
    marginTop = 40
}

function headerFull() {
    let header = document.querySelector('.header')
    header.style.width = "100%"
    header.style.marginLeft = "0%"
    header.style.paddingTop = "50px"
    marginTop = -100
}