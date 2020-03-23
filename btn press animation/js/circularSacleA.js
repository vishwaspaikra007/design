// btn on which animation will be applied
var btn = document.querySelectorAll('.btnCircularScaleA');

for(let i=0;i<btn.length;i++)
{
    // add the element for the circular scale btn animation
    let cirscabtnA = document.createElement("div");
    cirscabtnA.classList.add('circularScaleA');
    cirscabtnA.classList.add('circularScaleAafter');

    btn[i].prepend(cirscabtnA);
    btn[i].setAttribute('onclick', 'btncirscabtnAFunc(this,event)');
}

function btncirscabtnAFunc(ths, e) {
    if(getSelection().toString())
        return;
    xOffset = ths.getBoundingClientRect().x;
    yOffset = ths.getBoundingClientRect().y;

    var after = ths.querySelector('.circularScaleA');
    width = after.clientWidth;
    height = after.clientHeight;

    after.style.marginLeft = e.x - xOffset - width/2 + "px";
    after.style.marginTop = e.y - yOffset - height/2 + "px";
    after.classList.add('circularScaleAstart');
    after.classList.remove('circularScaleAafter');
    setTimeout(() => {
        after.classList.remove('circularScaleAstart');
        after.classList.add('circularScaleAafter');
    }, 0);
}

