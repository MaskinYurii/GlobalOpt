const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
    overlay.classList.add('menu__overlay_active')
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    overlay.classList.remove('menu__overlay_active')
});


