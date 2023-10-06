//slider
const leftButton = document.querySelector('.slider__button_left'),
    slides = document.querySelectorAll('.slider__elems'),
    rightButton = document.querySelector('.slider__button_right'),
    slidesElement = document.querySelector('.slider__inner'),
    slidesWrapper = document.querySelector('.slider__courusel'),
    slider = document.querySelector('.slider'),
    width = window.getComputedStyle(slidesWrapper).width;
let offset = 0;
let x1 = 0,
    x2 = 0;


slides.forEach(slide => {
    slide.style.width = width;
});

function slideTransform() {
    slidesElement.style.transform = `translateX(-${offset}px)`;
}



function getNumbers(str) {
    return +str.replace(/\D/g, '');
}

leftButton.addEventListener('click', () => {
    if (offset == 0) {
        offset = getNumbers(width) * (slides.length - 1);
    } else {
        offset -= getNumbers(width);
    }

    slideTransform();

});



rightButton.addEventListener('click', () => {
    if (offset == getNumbers(width) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += getNumbers(width);
    }

    slideTransform();
});

slider.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    x1 = touch.screenX;
});

slider.addEventListener('touchend', e => {
    const touch = e.changedTouches[0];
    x2 = touch.screenX;
    let difX = x2 - x1;

    if (difX > 50) {
        if (offset == 0) {
            offset = getNumbers(width) * (slides.length - 1);
        } else {
            offset -= getNumbers(width);
        }

        slideTransform();
    } else if (difX < -50) {
        if (offset == getNumbers(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += getNumbers(width);
        }

        slideTransform();
    } else {
        return false;
    }
});

//toggler

const more = document.querySelectorAll('.catalog-elem__link'),
      back = document.querySelectorAll('.catalog-elem__list-link'),
      contentItem = document.querySelectorAll('.catalog-elem__content'),
      listItem = document.querySelectorAll('.catalog-elem__list'),
      wrapper = document.querySelectorAll('.catalog-elem__wrapper');


contentItem.forEach( elem => {
    elem.classList.add('catalog-elem__content_active');
});

function showList(i) {
    contentItem[i].classList.remove('catalog-elem__content_active');
    listItem[i].classList.add('catalog-elem__list_active'); 
}

function showContent(i) {
    listItem[i].classList.remove('catalog-elem__list_active');
    contentItem[i].classList.add('catalog-elem__content_active'); 
}

more.forEach( function (elem, i) {
    elem.addEventListener('click', e => {
        e.preventDefault();
        showList(i);
    });
});

back.forEach(function(link, i) {
    link.addEventListener('click', e => {
        e.preventDefault();
        showContent(i);
    });
});

//tabs

const tabsHeader = document.querySelectorAll('.catalog__tab'),
      tabsParent = document.querySelector('.catalog__tabs'),
      tabsContent = document.querySelectorAll('.catalog__elems');

    function hideTabsContent() {
        tabsHeader.forEach((item) => {
            item.classList.remove('catalog__tab_active');
        });
        tabsContent.forEach(item => {
            item.classList.add('catalog__elems_hidden');
        });
    }

    function showTabsContent(i = 1) {
        tabsHeader[i].classList.add('catalog__tab_active');
        tabsContent[i].classList.remove('catalog__elems_hidden');
    }


    tabsHeader.forEach((elem,i) => {
        elem.addEventListener('click', e => {
            if (e.target && e.target.classList.contains('catalog__tab')){
                hideTabsContent();
                showTabsContent(i); 
            } else {
                hideTabsContent();
                showTabsContent(i); 
            }
        });
    });

    tabsHeader[0].click();