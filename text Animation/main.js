var text = document.querySelector('.textBox');
var letters = text.textContent.split("");

text.innerHTML = "";

for(let i=0; i<letters.length; i++)
{
    text.innerHTML += `<span>${letters[i]}</span>`;
}

var allSpan = document.querySelectorAll('span');
var i=0;

var move = setInterval(() => {
    allSpan[i].classList.add('rest');
    if(++i >= letters.length)
    {
        clearInterval(move);
    }
}, 100);