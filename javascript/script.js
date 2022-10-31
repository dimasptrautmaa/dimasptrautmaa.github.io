const img = document.getElementById('img-person');
const menu = document.getElementById('menu');
const navul = document.getElementById('nav-menu');
const textperson = document.getElementById('text-person');
const img2= document.getElementById('img-dimas-2');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    img.style.translate = value * -0.45 +'px';
    textperson.style.translate = value * 0.25 + 'px';
});

menu.addEventListener('click', function(){
    navul.classList.toggle('move');
});
