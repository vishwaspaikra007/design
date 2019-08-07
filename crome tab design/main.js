function show(index,ths) {
    var hidetab = document.querySelectorAll(".tabs");
    var hidetabHead = document.querySelectorAll(".tabsHead");
    for(i=0;i<hidetab.length;i++)
    {
        hidetab[i].style.zIndex = "-1";
        hidetabHead[i].style.background = "black";
        hidetabHead[i].style.color = "white";
        hidetabHead[i].style.border = "none";
    }
    document.querySelector("#tab" + index).style.zIndex = "0";
    ths.style.background = "white";
    ths.style.color = "black";
    ths.style.borderBottom = "none";
    ths.style.border = "1px solid ";
    ths.style.borderBottom = "none";


}