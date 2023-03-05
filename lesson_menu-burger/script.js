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
    console.log('menuLink: ' + menuLink);
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        console.log('gotoBlock: ' + gotoBlock);
        const goBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        console.log('goBlockValue: ' + goBlockValue);
        window.scrollTo({
            top: goBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}