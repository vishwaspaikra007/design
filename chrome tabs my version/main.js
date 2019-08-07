function show(index,ths) {
    var hidetab = document.querySelectorAll(".tabs");
    var hidetabHead = document.querySelectorAll(".tabsHead");
    var maintabHead = document.querySelector("#tabHead1");
    for(i=1;i<hidetab.length;i++)
    {
        hidetab[i].style.zIndex = "-1";
        hidetabHead[i].style.background = "black";
        hidetabHead[i].style.color = "white";
    }
    document.querySelector("#tab" + index).style.zIndex = "0";
    ths.style.background = "white";
    ths.style.color = "black";
    maintabHead.innerHTML = ths.textContent;
}