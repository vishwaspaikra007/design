// btn on which animation will be applied
var btn = document.querySelectorAll('.btnCircularScaleA');

for(let i=0;i<btn.length;i++)
{
    // add the element for the circular scale btn animation
    let cirscabtnA = document.createElement("div");
    cirscabtnA.classList.add('circularScaleA');
    cirscabtnA.classList.add('circularScaleAafter');
    //add container for the above element
    let circularScaleAContainer = document.createElement("div");
    circularScaleAContainer.classList.add('circularScaleAContainer');
    circularScaleAContainer.prepend(cirscabtnA);

    btn[i].prepend(circularScaleAContainer);
    btn[i].setAttribute('onclick', 'btncirscabtnAFunc(this,event)');
}

function btncirscabtnAFunc(ths, e) {
    if(getSelection().toString())
        return;
    let circularScaleAContainer = ths.querySelector('.circularScaleAContainer');
    xOffset = circularScaleAContainer.getBoundingClientRect().x;
    yOffset = circularScaleAContainer.getBoundingClientRect().y;

    var after = circularScaleAContainer.querySelector('.circularScaleA');
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

