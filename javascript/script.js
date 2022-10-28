const img = document.getElementById('img-person');
const menu = document.getElementById('menu');
const navul = document.getElementById('nav-menu');

menu.addEventListener('click', function(){
    navul.classList.toggle('move');
});

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    img.style.translate = value * -0.5 +'px';
});