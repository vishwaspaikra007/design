zoomIn = () => {
    var i=1;
    img = document.querySelector(".meLooking");
    img.style.marginLeft = '-2100px';
    img.style.bottom = "-2780px"
    var z = setInterval(() => {
        i+=i*0.4;
        img.style.transform = `scale(${i})`;
        console.log('zooming');
        if(i >= 10) {
            clearInterval(z);
        }
    }, 100);
}