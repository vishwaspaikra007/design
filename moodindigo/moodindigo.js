var scrollPos = 0;
var boxHeight = 0;
var i=1,j=0;

window.onload = ()=> {
    boxHeight = document.querySelector('.slide').clientHeight;
    window.open('#slide1',top);
}

var slidesContainer = document.querySelector(".slidesContainer");
slidesContainer.addEventListener("scroll",()=> {
    boxHeight = document.querySelector('.slide').clientHeight;
    scrollFunction();
})

scrollFunction = (e)=> {
    var cnt = document.querySelector('.cnt');
    if(slidesContainer.scrollTop > scrollPos) {
        // console.log("going down", " ",cnt.scrollTop/boxHeight," ",cnt.scrollTop," ",boxHeight)
        a=Math.floor(cnt.scrollTop/boxHeight);
        if(a == 0 )
            i=2;
        else if(a == 1)
            i=3;
        else if(a == 2)
            i=4;
        else if(a == 3)
            i=5;
        else if(a == 4)
            i=6;
        else if(a == 5)
            i=7;
        else if(a == 6)
            i=8;
        else if(a == 7)
            i=9;
        else if(a == 8)
            i=10;
        else if(a == 9)
            i=10;
        var slide = document.querySelector('.cnt');
        slide.scrollTop = boxHeight*(i-1);
        window.open('./#slide'+ i,top);
    } else if(slidesContainer.scrollTop < scrollPos) {
        // console.log("Going up",slidesContainer.scrollTop ,"  ", scrollPos)
        a=Math.floor(Math.abs(cnt.scrollTop+boxHeight/3)/boxHeight);
        if(a == 1 || a == 0)
            i=1;
        else if(a == 2)
            i=2;
        else if(a == 3)
            i=3;
        else if(a == 4)
            i=4;
        else if(a == 5)
            i=5;
        else if(a == 6)
            i=6;
        else if(a == 7)
            i=7;
        else if(a == 8)
            i=8;
        else if(a == 9)
            i=9;
        else if(a == 10)
            i=10;
        var slide = document.querySelector('.cnt');            
        slide.scrollTop = boxHeight*(i-1);            
        window.open('./#slide'+ i,top);
    }
    
    scrollPos = slidesContainer.scrollTop;
}