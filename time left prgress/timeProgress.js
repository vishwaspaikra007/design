var i=0,time,timeEnd,run = true;
var timeTaker =  document.querySelector('#timer');
var barWidth = document.querySelector('.box');
function decide() {
    barWidth.style.width = (i/time)*100 + "%";
    if (i >= timeTaker.value*10) {
        alert("not possible you cannot reduce time anymore");
        return 0;
    }
    else if(run == true) {
        timer();
    } else {
        stop();
    }
}
function stop() {
    clearInterval(timeEnd);
    run = true;
    timer();
}
function timer() { 
run =  false;
var time = timeTaker.value;
time *=100; 
timeEnd = setInterval(() => {
        i++;
        console.log(i + " " + time);
        barWidth.style.width = (i/time)*100 + "%";
        if(i >= time) {
        clearInterval(timeEnd);
        i=0;
        }
    }, 10);  
}