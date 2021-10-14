window.addEventListener('scroll', function(){
    const nav = this.document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
})

// hamburger function

const bar = document.querySelector('.hamburger_icon');

bar.addEventListener('click', () => {
    bar.classList.toggle('open')
})

// hamburger function

const icon = document.querySelector('.hamburger_icon')
const menu = document.querySelector('.navegation');

icon.addEventListener('click', () => {
    menu.classList.toggle('open')
})