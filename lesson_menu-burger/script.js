"use strict"
let menuArrows = document.querySelectorAll('.menu__arrow');
// let menuArrow;


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
}

if (isMobile.any()) {
    document.body.classList.add('_touch');
    if (menuArrows.length > 0) {
        menuArrows.forEach(menuArrow => menuArrow.addEventListener('click', function (e) {
            menuArrow.parentElement.classList.toggle('_active');
        }));
    }
} else {
    document.body.classList.add('_pc');
}

/*  ============= DATA GOTO ==============  */

let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
console.log(menuLinks)
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => menuLink.addEventListener('click', smoothScroll));
}
function smoothScroll(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const goBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        if (iconMenu.classList.contains('_active')) {
            menuBody.classList.remove('_active');
            iconMenu.classList.remove('_active');
            document.body.classList.remove('_lock');
        }
        window.scrollTo({
            top: goBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}


/*  ============= MENU BURGER ==============  */

const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
    iconMenu.addEventListener('click', openMenu);
}
function openMenu() {
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock')
}
