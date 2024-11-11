let menuIcon = document.querySelector('.menu-icon');
let navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click',()=>{
 
    if(navBar.style.maxHeight == '0px'){
        navBar.style.maxHeight = '600px';
        menuIcon.classList.add('open-menu');
    }else{
        navBar.style.maxHeight = '0px';
        menuIcon.classList.remove('open-menu');


    }
  
});

const Slides = document.querySelectorAll('.slide');
const slideLinks = document.querySelectorAll('.slide-link');

function showSlide(index) {
    // Loop through slides and links, toggling the active state
    Slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); // Show only the selected slide
        slideLinks[i].classList.toggle('span-active', i === index); // Highlight the corresponding bullet
    });
};

const slider = document.querySelector('.image-slider');
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentIndex = index;
        updateSliderPosition();
    }
}

// Event listeners for dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        goToSlide(index);
    });
});

// Swipe functionality for touch devices
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Detect swipe direction
    if (diff > 50) { // Swipe left
        goToSlide(currentIndex + 1);
        isDragging = false;
    } else if (diff < -50) { // Swipe right
        goToSlide(currentIndex - 1);
        isDragging = false;
    }
});

slider.addEventListener('touchend', () => {
    isDragging = false;
});