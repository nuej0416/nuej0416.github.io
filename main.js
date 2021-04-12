const sliderWrapper = document.querySelector('.slide_wrap');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.item');

const totalSlides = slides.length;

const sliderWidth = 350;

let slideIndex = 0;

slider.style.width = sliderWidth * totalSlides +'px';

const clonedFirstItem = slider.firstElementChild.cloneNode(true);
slider.appendChild(clonedFirstItem);

function showSlider() {
    setInterval(function () {
        slider.style.transition = '0.2s';
        slider.style.transform = "translate3d(-" + sliderWidth * (slideIndex + 1) + "px, 0px, 0px";

        slideIndex++;

        if ( slideIndex === 2) {
            setTimeout(function() {
                slider.style.transition = '0.2s';
                slider.style.transform = "translate3d(0px, 0px, 0px";
            }, 301)

            slideIndex = 0;
        }
    }, 2000);
    // for(let i = 0; i < totalSlides; i++) {
    //     slider.style.left = -(sliderWidth * slideIndex) + 'px';
    // }
    // slideIndex ++;
    // if (slideIndex = 3) {

    // }
    // if(slideIndex === totalSlides) {
    //     slideIndex = 0;
    // }
    // setTimeout(showSlider, 2000);
}

showSlider();