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