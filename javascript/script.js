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


// P R O J E C T 

const swipe = document.getElementById('swipe-menu');
const project = document.getElementById('wrap-project');
const closex = document.getElementById('close');
const logo = document.getElementById('logo');

document.querySelector('video').playbackRate = 1.3;
document.querySelector('video').playsInline();


swipe.addEventListener('click', function(){
    project.classList.add('swipe');
    closex.style.display = 'flex';
    logo.style.display = 'none';
});

closex.addEventListener('click', function(){
    project.classList.remove('swipe');
    closex.style.display = 'none';
    logo.style.display = 'flex';
});