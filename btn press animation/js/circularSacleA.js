var btn = document.querySelector('.btn');
btn.addEventListener('click', (x)=> {
    xOffset = btn.getBoundingClientRect().x;
    yOffset = btn.getBoundingClientRect().y;

    var after = document.querySelector('.circularScaleA');

    width = after.clientWidth;
    height = after.clientHeight;

    console.log(width);
    
    after.style.marginLeft = x.x - xOffset - width/2 + "px";
    after.style.marginTop = x.y - yOffset - height/2 + "px";
    after.classList.add('circularScaleAstart');
    after.classList.remove('circularScaleAafter');
    setTimeout(() => {
        after.classList.remove('circularScaleAstart');
        after.classList.add('circularScaleAafter');
    }, 0);
})

