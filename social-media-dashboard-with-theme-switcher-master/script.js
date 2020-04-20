function toggle(ths) {
    let btnContainer = document.querySelector('.btnContainer');
    let body = document.querySelector('body');
    let plate = document.querySelector('.plate');
    let cards = document.querySelectorAll('.cards');
    let scards = document.querySelectorAll('.scards');
    let mod = document.querySelectorAll('.mod');
    
    if (ths.style.marginLeft == '2px') {
        ths.style.marginLeft = '27px';
        btnContainer.style.background = "hsl(230, 22%, 74%)"
        body.style.background = 'white';
        body.style.color = "black"
        plate.style.background = "ghostwhite";
        cards.forEach(ele => {
            ele.classList.remove('cardDark');
        });
        scards.forEach(ele => {
            ele.classList.remove('cardDark');
        });
        mod.forEach(ele => {
            ele.style.color = "hsl(228, 12%, 44%)";
        });
    } else {
        ths.style.marginLeft = '2px';
        btnContainer.style.background = "linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        body.style.background = 'hsl(230, 17%, 14%)';
        body.style.color = "white"
        plate.style.background = "hsl(232, 21%, 17%)";
        cards.forEach(ele => {
            ele.classList.add('cardDark');
        });
        scards.forEach(ele => {
            ele.classList.add('cardDark');
        });
        mod.forEach(ele => {
            ele.style.color = "hsl(228, 34%, 66%)";
        });
    }
}