'use strict';

const btnMenu = document.querySelector('.button_menu'),
      navMenu = document.querySelector('.menu');


btnMenu.addEventListener('click', e => {
    navMenu.classList.toggle('active');
    btnMenu.classList.toggle('button_menu_active');
});

